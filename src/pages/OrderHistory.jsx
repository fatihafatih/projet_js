function OrderHistory({historique,setPage}){
if(historique.length===0){
  return(
    <div className="aucune-commande">
        <p className="icon"></p>
        <h2>Aucun commande passée</h2>
        <p style={{color:"#888",marginBottom:"20px"}}>Vos futures commandes apparaîtront ici</p>
    <button className="btn-commander" style={{width:"auto",display:"inline-block"}} onClick={()=>setPage("produits")}>Commencer mes achats</button>
    </div>
  );  
}
return(
<div className="commandes">
    <h2>Mes Commandes</h2>
    <p className="nb-commandes">{historique.length}commande(s)</p>
<div className="liste-commande">
{[...historique].reverse().map((commande)=>(
    <div key={commande.numeroCommande} className="num-commande">
        <div className="infos-commande">
            <div>
                <span className="info-numero">{commande.numeroCmmande} </span>
           <span className="info-etat">Confirmée</span>
            </div>
            <div className="infos-date-prix">
<span className="info-date">{commande.date}</span>
<span className="info-prix">{commande.total.toFixed(2)} DH</span>
            </div>
        </div>
    <div className="infos-articles">
        {commande.articles.map((item)=>(
        <div key={`${item.id}-${item.taille}`} className="liste-articles">
<img src={item.image} alt={item.nom} className="info-image" />
<div className="details-commande">
<p className="nom-article">{item.nom}</p>
<p className="description-article">
  Taille:{item.taille} &nbsp;|&nbsp; Quantité:{item.quantite}
</p>
</div>
<span className="info-prix">
{(item.prix*item.quantite).toFixed(2)}DH
</span>
        </div>
        ))}
    </div>
    </div>
))}
</div>
<div className="infos-livraison">
    <span>Livraison:{commande.client.adresse},{commande.client.ville}</span>
</div>
</div>
);
}
export default OrderHistory;