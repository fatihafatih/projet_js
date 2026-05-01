function Cart({panier,setPage,supprimerPanier,modifierQuantite , total}){
if(panier.length===0){
    return(
        <>
        <div className="panier-vide">
        <p className="panier-vide-icon">🛒</p>
        <h2>Votre panier est vide</h2>
        <button  className="btn1" onClick={()=>setPage("produits")}>
            voir les produits
        </button>
        </div>
        </>
    );
}
return(
    <>
    <div  className="cart1">
        <h2>Mon Panier</h2>
        <div className="cart2">
            <div className="cartitems">
                {panier.map((item)=>(
                    <div key={`${item.id}-${item.taille}`} className="cartitem" >

                        <img src={item.image} alt={item.nom}  className="itemimage" />
                        <div className="iteminfos">
                            <h3>{item.nom}</h3>
                            <p className="itemtaille">Taille:{item.taille}</p>
                            <p className="itemprix">{item.prix.toFixed(2)}DH</p>
                        </div>
                        <div className="itemquantite">
                            <button onClick={()=>modifierQuantite(item.id,item.taille,item.quantite-1)}>
                                -
                            </button>
                            <span>{item.quantite}</span>
                             <button onClick={()=>modifierQuantite(item.id,item.taille,item.quantite+1)}>
                                +
                            </button>
                        </div>
                        <div className="itemsoustotal">
                          {(item.prix*item.quantite).toFixed(2)}DH
                            </div>

                         <button className="btnsupprimer"
                           onClick={()=>supprimerPanier(item.id,item.taille)}>
                                ✕
                            </button>
              

            </div>
                   ))  }
        </div>
        <div className="cartresume">
            <h3>Resume</h3>
            <div className="resumeligne">
                <span>Sous-total</span>
                <span>{total.toFixed(2)}DH</span>

            </div>
            <div className="resumeligne">
                <span>Livraison</span>
                <span>{total>=50?"Gratuite 🎉" : "4.99 DH"}</span>

            </div>
              <div className="resumelignetotalfinal">
                <span>Total</span>
                <span>{(total>=50?total:total+4.99).toFixed(2)}DH</span>

            </div>
 <button className="btn1" onClick={()=>setPage("commande")}>
                               Passer la commande
                            </button>
    <button className="btn2" onClick={()=>setPage("produits")}>
                               Continuer mes achats 
                               </button>
        </div>
        

    </div>
    </div>
            
    </>

);
}
 export default Cart;