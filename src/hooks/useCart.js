import { useState } from "react";
function useCart(){
const [panier,setPanier]=useState([]);


function ajouterAuPanier(produit,taille){
setPanier((prev)=>{
    //prev c'est le panier actuel
    const existeDeja=prev.find(
    (item)=>item.id === produit.id && item.taille ===taille
);
if( existeDeja){
    //map parcourir le tableau et creer un nouvel tableau
    return prev.map((item)=>
    item.id === produit.id && item.taille ===taille
    ? { ...item,quantite:item.quantite+1}
    :item
    );
}
return [...prev,{...produit,taille,quantite:1}]
}


);

}
function  supprimerDuPanier(id,taille){
    setPanier((prev)=>
    prev.filter((item)=>!(item.id===id && item.taille===taille))
);

}
function modifierQuantite(id,taille,quantite){
    if(quantite<=0){
        supprimerDuPanier(id,taille);
        return;
    }
  setPanier((prev)=>
    prev.map((item)=>
        item.id===id&& item.taille===taille
  ?{...item,quantite}
  :item
    )
)

}
function viderPanier(){
    setPanier([])
}
//acc:accumulateur :resultat qui s'ajoute a chaque tour
//item :element du panier
const total=panier.reduce(
(acc,item)=>acc+item.prix*item.quantite,0
);
const nbArticles=panier.reduce((acc,item)=>acc+item.quantite,0);
 return {
  panier,
  ajouterAuPanier,
  supprimerDuPanier,
  modifierQuantite,
  viderPanier,
  total,
  nbArticles
 };

}
export default useCart;