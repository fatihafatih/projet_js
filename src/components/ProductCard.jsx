function ProductCard({produit,setPage,setProduitSelectionne}){
    function ouvrirDetail(){
        setProduitSelectionne(produit);
            setPage("detail");
        }
    
return(
    <>
    <div className="carteproduit" onClick={ouvrirDetail}>
        <div className="conteneur-image-carte">
<img src={produit.image}
alt={produit.nom}
className="image-carte"
/> 
  <span  className="categorie-carte">
    {produit.categorie}
  </span>
 </div>
 <div className="corps-carte">
    <h3 className="nom-carte">{produit.nom}</h3>
    <div className="pied-carte">
        <span className="prix-carte">
            {produit.prix.toFixed(2)}DH
        </span>
        <span className="note-carte">
             ⭐ {produit.note}
        </span>
         </div>
 </div>
  </div>
    </>
);
}
export default ProductCard;