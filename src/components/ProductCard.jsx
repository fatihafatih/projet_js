// Composant carte produit - reçoit : produit, setPage, setProduitSelectionne
function ProductCard({ produit, setPage, setProduitSelectionne }) {
  function ouvrirDetail() {
    setProduitSelectionne(produit);
    setPage("detail");
  }

  return (
    <div className="product-card" onClick={ouvrirDetail}>
      <div className="card-img-container">
        <img src={produit.image} alt={produit.nom} className="card-img" />      </div>
      <div className="card-body">
        <h3 className="card-nom">{produit.nom}</h3>
        <div className="card-footer">
          <span className="card-prix">{produit.prix} Dhs</span>
          <span className="card-note">rating: {produit.note}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
