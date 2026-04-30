import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import OrderHistory from "./pages/OrderHistory";
import useCart from "./hooks/useCart";
import "./App.css";

function App() {
  const [page, setPage] = useState("accueil");
  const [produitSelectionne, setProduitSelectionne] = useState(null);
  const [utilisateur, setUtilisateur] = useState(null);
  const [historique, setHistorique] = useState([]); // toutes les commandes passées

  const {
    panier, ajouterAuPanier, supprimerDuPanier,
    modifierQuantite, viderPanier, total, nbArticles,
  } = useCart();

  // Appelée par Checkout après confirmation
  function ajouterCommande(commande) {
    setHistorique((prev) => [...prev, commande]);
  }

  function deconnecter() {
    setUtilisateur(null);
    viderPanier();
    setPage("accueil");
  }

  function allerAuPanier() {
    if (!utilisateur) {
      setPage("login");
    } else {
      setPage("panier");
    }
  }

  function renderPage() {
    switch (page) {
      case "login":
        return <Login setUtilisateur={setUtilisateur} setPage={setPage} />;

      case "accueil":
        return <Home setPage={setPage} />;

      case "produits":
        return (
          <Products setPage={setPage} setProduitSelectionne={setProduitSelectionne} />
        );

      case "detail":
        return (
          <ProductDetail
            produit={produitSelectionne}
            ajouterAuPanier={ajouterAuPanier}
            setPage={setPage}
            utilisateur={utilisateur}
          />
        );

      case "panier":
        return (
          <Cart
            panier={panier}
            supprimerDuPanier={supprimerDuPanier}
            modifierQuantite={modifierQuantite}
            total={total}
            setPage={setPage}
          />
        );

      case "commande":
        if (!utilisateur) { setPage("login"); return null; }
        return (
          <Checkout
            panier={panier}
            total={total}
            viderPanier={viderPanier}
            setPage={setPage}
            utilisateur={utilisateur}
            ajouterCommande={ajouterCommande}
          />
        );

      case "historique":
        if (!utilisateur) { setPage("login"); return null; }
        return <OrderHistory historique={historique} setPage={setPage} />;

      default:
        return <Home setPage={setPage} />;
    }
  }

  return (
    <div className="app">
      <Navbar
        page={page}
        setPage={(p) => (p === "panier" ? allerAuPanier() : setPage(p))}
        nbArticles={nbArticles}
        utilisateur={utilisateur}
        deconnecter={deconnecter}
      />
      <main className="main-content">{renderPage()}</main>
      <footer className="footer">
        <p>© 2025 StyleShop — Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;
