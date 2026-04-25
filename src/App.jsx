import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import useCart from "./hooks/useCart";
import "./App.css";


function App() {
  const [page, setPage] = useState("accueil");
  const [produitSelectionne,setProduitSelectionne]=useState(null);
  const [utilisateur,setUtilisateur]=useState(null);
  const {
    panier,
    ajouterAuPanier,
    modifierQuantite,
    supprimerDuPanier,
    viderPanier,
    total,
    nbArticles,
  }=useCart();
  


  function deconnecter(){
    setUtilisateur(null);
    viderPanier();
    setPage("accueil")
  }

  function allerAuPanier(){
  if(!utilisateur){
    setPage("login");
  }
  else{
  setPage("panier");
  }
  }
  function rendrePage(){
 switch(page){
   case "login":
    return <Login setUtilisateur={setUtilisateur} setPage={setPage}/>;
  case "accueil":
    return <Home setPage={setPage}/>;
    case "produits":
    return  ( 
    <Products setPage={setPage}
     setProduitSelectionne={setProduitSelectionne}
    />
  );
  case "detail":
    return (
     <ProductDetail 
     produit={produitSelectionne}
     setPage={setPage}
     utilisateur={setUtilisateur}
     ajouterAuPanier={ajouterAuPanier}
    />
  );


case "panier":
  return (
    <Cart
    
    panier={panier}
    setPage={setPage}
    supprimerDuPanier={supprimerDuPanier}
    modifierQuantite={modifierQuantite}
    total={total}
    />
  );
case "commande":
  if(!utilisateur){
    setPage("login");
    setPage(null);
    return null;
  }
 return ( 
  <Checkout
  panier={panier}
  total={total}
  viderPanier={viderPanier}
  setPage={setPage}
  utilisateur={utilisateur}
 
  />
);
 default:
  return <Home setPage={setPage}/>

 }





  }

  return (
    <>
     <Navbar
     page={page}
     setPage={(p)=>(p ==="panier")?allerAuPanier():setPage(p)}
     nbArticles={nbArticles}
     utilisateur={utilisateur}
     deconnecter={deconnecter}

    />
    <main className="main-content">{rendrePage()}</main>
    <footer className="main-content">
      <p>@ 2026 FashionStore -Tous droits reserves</p>
    </footer>
      </>
  )
}


export default App
