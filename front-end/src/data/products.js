
export async function fetchProduits() {
  const res = await fetch("http://localhost:3000/products");
  return res.json();
}

export async function fetchProduitById(id) {
  const res = await fetch(`http://localhost:3000/products/${id}`);

  if (!res.ok) {
    throw new Error("Produit introuvable");
  }

  return res.json();
}

export async function envoyerCommande(commande) {
  const res = await fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commande),
  });

  return res.json();
}

export const categories = ["Tous", "T-shirts", "Pantalons", "Vestes", "Robes", "Sweats", "Chemises", "Manteaux"];
export async function fetchCategories(){
  
  const res=await fetch("http://localhost:3000/categories");
  if(!res.ok){
    throw new Error("Erreur lors du chargement des catégories");
  }
  return res.json();
}


