import { useState } from "react";

function Navbar({page ,setPage,nbArticles,utilisateur,deconnecter}){
const [menuOuvert,setMenuOuvert]=useState(false);
function fermerMenu(){
    setMenuOuvert(false);
}
function allerVers(p){
    setPage(p);
    fermerMenu();
}
return(<nav className="navbar">
    <div className="brand" onClick={()=>allerVers("accueil")}>
        👗 FashionStore
    </div>
    <div className="links">
        <button
        className={page==="accueil"? "nav-btn active":"nav-btn"}
        onClick={()=>allerVers("accueil")}
        >
        Accueil
        </button>
         <button
        className={page==="produits"? "nav-btn active":"nav-btn"}
        onClick={()=>allerVers("produits")}
        >
        Produits
        </button>
    </div>
<div className="navbardroite">
    {utilisateur?(
        <div className="menuderoule">
            <div className="usermenu"
            onClick={()=>setMenuOuvert((prev)=>!prev)}
            >
           <div className="useravatar"> {utilisateur.avatar} </div>
           <span className="usernom">{utilisateur.nom.split(" ")[0]}</span>
           <span className="logo" >{menuOuvert?"▲" : "▼"}</span>
                </div>
                {
                    menuOuvert && (
                        <div className="menudown">
                            <div className="menudowninfo">
                                <p className="nomdown">{utilisateur.nom}</p>
                              <p className="nomdown">{utilisateur.email}</p>

                            </div>
                            <div className="separateur"/>
                                <button className="element-menu"
                                onClick={()=>allerVers("historique")}
                                >
                  📦 Mes commandes

                                </button>
                    <div className="separateur" />
                            <button className="element-menu deconnexion"
                            onClick={()=>{
                                deconnecter();
                                fermerMenu();
                            }}
                            >
                             🚪 Déconnexion
                            </button>
                                </div>
                    )}
        </div>
        ):(
            <button className="btnnav" onClick={()=>setPage("login")}>
              👤 Connexion
              
 </button>
     )}
        <button className="btnpanier" onClick={()=>setPage("panier")}>
              🛒
              {nbArticles >0 &&(
                <span className="badgepanier">{nbArticles}</span>
              )}
        </button>
  

</div>
</nav>

            );
}
export default Navbar;