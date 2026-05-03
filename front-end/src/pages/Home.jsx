//c'est la page d'accueil
function Home({setPage}){
    return(
        <>
        <div className="home">
            <div className="hero">
                <h1>Nouvelle Collection 2026</h1>
                <p>Decouvrez les derniers tendances</p>
                <button className="btn-primary" onClick={()=>setPage("produits")}>
                    Voir les produits
                </button>
           </div>
            <div className="categories-grid">
                <div className="btn-two" onClick={()=>setPage("produits")}>
                  <span className="btn-tree"><img src="https://image.made-in-china.com/202f0j00gpLRHTArqFkt/Custom-T-Shirts-100-Cotton-Men-Tshirt-Tee-Shirt-Printing-T-Shirt-Polo-T-Shirt-for-Men-Women-Plain-T-Shirt.webp" alt="T-shirt" /></span>
                  <p>T-shirts</p>
                </div>
                <div className="btn-two" onClick={()=>setPage("produits")}>
                  <span className="btn-tree"><img src="https://img01.ztat.net/article/spp-media-p1/ce700a1bd731458bbc48c32a6e082f6c/8f47ffc12c944a5cb227e4071a180332.jpg?imwidth=200&filter=packshot" alt="Pantalon" /></span>
                  <p>Pantalons</p>
                </div>

                <div className="btn-two" onClick={()=>setPage("produits")}>
                  <span className="btn-tree"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRluLcs0GfV4-TUWXQll2hcv1s8cU68kymOHg&s"/></span>
                  <p>Vestes</p>
                </div>
           <div className="btn-two" onClick={()=>setPage("produits")}>
                  <span className="btn-tree"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6luqDgxk8p5CDuuDGkmZ6gmvCj-2bSxo7A&s"/></span>
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