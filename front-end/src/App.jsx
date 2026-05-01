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
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("accueil");
  const [produitSelectionne, setProduitSelectionne] = useState(null);
  const [utilisateur, setUtilisateur] = useState(null);
  const [historique, setHistorique] = useState([]);

  const {
    panier, ajouterAuPanier, supprimerDuPanier,
    modifierQuantite, viderPanier, total, nbArticles,
  } = useCart();

  function ajouterCommande(commande) {
    setHistorique((prev) => [...prev, commande]);
  }

  function deconnecter() {
    setUtilisateur(null);
    viderPanier();
    setPage("accueil");
  }

  // function allerAuPanier() {
  //   if (!utilisateur) {
  //     setPage("login");
  //   } else {
  //     setPage("panier");
  //   }
  // }
  function allerAuPanier() {
  setPage("panier");
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
  utilisateur={utilisateur}
/>
        );

      case "commande":
         if (!utilisateur) {
    setPage("login");
    return null;
  }
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
setPage={setPage}
        nbArticles={nbArticles}
        utilisateur={utilisateur}
        deconnecter={deconnecter}
      />
      <main className="main-content">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
