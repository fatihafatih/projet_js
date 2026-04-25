//c'est la page d'accueil
function Home({setPage}){
    return(
        <>
        <div className="home">
            <div className="home1">
                <h1>Nouvelle Collection 2026</h1>
                <p>Decouvrez les derniers tendances</p>
                <button className="btn-one" onClick={()=>setPage("produits")}>
                    Voir les produits
                </button>
           </div>
            <div className="home2">
                <div className="btn-two" onClick={()=>setPage("produits")}>
                  <span className="btn-tree">👕</span>
                  <p>T-shirts</p>
                </div>


            
                <div className="btn-two" onClick={()=>setPage("produits")}>
                  <span className="btn-tree">👖</span>
                  <p>Pantalons</p>
                </div>

                <div className="btn-two" onClick={()=>setPage("produits")}>
                  <span className="btn-tree">🧥</span>
                  <p>Vestes</p>
                </div>
           <div className="btn-two" onClick={()=>setPage("produits")}>
                  <span className="btn-tree">👗</span>
                  <p>Robes</p>
                </div>
             </div>
             <div className="home3">
                <h2>🎉 Livraison gratuite des 50DH d'achat</h2>
                <p>Retours gratuits sous 30 jours</p>


             </div>
        </div>
        </>
    )



}
export default Home;