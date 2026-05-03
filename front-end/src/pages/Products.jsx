import { useState, useEffect } from "react";
import { fetchProduits ,fetchCategories} from "../data/products";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

// Page liste des produits - utilise useEffect + async/await
function Products({ setPage, setProduitSelectionne }) {
  const [produits, setProduits] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [categorieActive, setCategorieActive] = useState("Tous");
  const [recherche, setRecherche] = useState("");
  const [categories,setCategories]=useState(["Tous"]);

  // Charger les produits au montage du composant
  useEffect(() => {
    chargerProduits();
  }, []);

  async function chargerProduits() {
    try {
      setChargement(true);
      const [data,categoriesData]=await Promise.all([fetchProduits(),
        fetchCategories(),
      ])
     /* const data = await fetchProduits();*/
      setProduits(data);
      setCategories(categoriesData);



    } catch (err) {
      setErreur("Erreur lors du chargement des produits.");
    } finally {
      setChargement(false);
    }
  }

  // Filtrer les produits selon catégorie et recherche
  const produitsFiltres = produits.filter((p) => {
    const matchCategorie =
      categorieActive === "Tous" || p.categorie === categorieActive;
    const matchRecherche = p.nom
      .toLowerCase()
      .includes(recherche.toLowerCase());
    return matchCategorie && matchRecherche;
  });

  if (chargement) return <Loading message="Chargement des produits..." />;
  if (erreur) return <div className="erreur">{erreur}</div>;

  return (
    <div className="products-page">
      <h2>Nos Produits</h2>

      {/* Barre de recherche */}
      <input
        type="text"
        className="search-input"
        placeholder="Rechercher un produit..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />

      {/* Filtres par catégorie */}
      <div className="filtres">
        {categories.map((cat) => (
          <button
            key={cat}
            className={categorieActive === cat ? "filtre-btn active" : "filtre-btn"}
            onClick={() => setCategorieActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Résultats */}
      <p className="nb-resultats">{produitsFiltres.length} produit(s) trouvé(s)</p>

      {/* Grille de produits */}
      <div className="products-grid">
        {produitsFiltres.map((produit) => (
          <ProductCard
            key={produit.id}
            produit={produit}
            setPage={setPage}
            setProduitSelectionne={setProduitSelectionne}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
