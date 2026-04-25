//  function Cart({panier,setPage,supprimerPanier,modifierPanier , total}){
// if(panier.length===0){
//     return(
//         <>
//         <div className="panier-vide">
//         <p className="panier-vide-icon">🛒</p>
//         <h2>Votre panier est vide</h2>
//         <button  className="btn1" onClick={()=>setPage("produits")}>
//             voir les produits
//         </button>
//         </div>
//         </>

//     );


// }
// return(
//     <>
//     <div  className="cart1">
//         <h2>Mon Panier</h2>
//         <div className="cart2">
//             <div className="cartitems">
//                 {panier.map((item)=>{
//                     <div key={`${item.id}-${item.taille}`} className="cartitem" >

//                         <img drc={item.image} alt={item.nom}  className="itemimage" />
//                         <div className="iteminfos">
//                             <h3>{item.nom}</h3>
//                             <p className="itemtaille">Taille:{item.taille}</p>
//                             <p className="itemprix">{item.prix.toFixed(2)}DH</p>
//                         </div>
                        
              

//             </div>
//                 }
//         </div>

//     </div>
//     </div>
            
//     </>

// );



 
//  }
//  export default Cart;