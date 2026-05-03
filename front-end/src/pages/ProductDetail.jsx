import { useState } from "react";
function ProductDetail({ produit, setPage, utilisateur, ajouterAuPanier }) {
  const [tailleActive, setTailleActive] = useState(null);
  const [erreurTaille, setErreurTaille] = useState(false);
  const [message, setMessage] = useState(null);

  if (!produit) return <p>Produit non trouvé</p>;

  function verifier() {
    if (!tailleActive) {
      setErreurTaille(true);
      return;
    }

    setErreurTaille(false);

    ajouterAuPanier(produit, tailleActive);

    setMessage("✅ Ajouté au panier !");
    setTimeout(() => setMessage(null), 2000);
  }
  return (
    <div className="pageDetail">
      <button className="retour" onClick={() => setPage("produits")}> ← Retour aux produits </button>
      <div className="card">
        <div className="image"> <img src={produit.image} alt={produit.nom} />
        </div>

        <div className="details">
          <div> <p className="categorie">Collection</p>
            <h1 className="titre">{produit.nom}</h1>
            <div className="diviseur" /> <p className="description">{produit.description}</p>
          </div>
          <div>
            <p className="prix">{produit.prix} Dhs</p>

            <p className="tailles">Tailles disponibles</p>
            <div className="listTailles">
              {produit.tailles?.map((t) => (
                <span
                  key={t}
                  className={`taille ${tailleActive === t ? "active" : ""}`}
                  onClick={() => {
                    setTailleActive(t);
                    setErreurTaille(false);
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {erreurTaille && (<p className="erreur-taille">⚠️ Veuillez choisir une taille</p>)}

            {message && <p className="message-info">{message}</p>}
            <button className="btn-panier" onClick={verifier}>  Ajouter au panier </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;