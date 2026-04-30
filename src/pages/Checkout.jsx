import { useState } from "react";
import { envoyerCommande } from "../data/products";
import Loading from "../components/Loading";

// Page commande/checkout - reçoit aussi l'utilisateur connecté
function Checkout({ panier, total, viderPanier, setPage, utilisateur, ajouterCommande }) {
  const [form, setForm] = useState({
    nom: utilisateur?.nom || "",
    email: utilisateur?.email || "",
    adresse: "",
    ville: "",
    codePostal: "",
    carte: "",
  });
  const [envoi, setEnvoi] = useState(false);
  const [confirmation, setConfirmation] = useState(null);
  const [erreur, setErreur] = useState(null);

  // Mettre à jour les champs du formulaire
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Valider le formulaire
  function validerForm() {
    for (const champ in form) {
      if (!form[champ].trim()) {
        return false;
      }
    }
    return true;
  }

async function soumettreCommande() {
    if (!validerForm()) {
      setErreur("⚠️ Veuillez remplir tous les champs.");
      return;
    }
 setErreur(null);

try {
  setEnvoi(true);
    const commande = { client: form, articles: panier, total };
    const resultat = await envoyerCommande(commande);

 ajouterCommande({
     numeroCommande: resultat.numeroCommande,
     date: new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" }),
     articles: [...panier],
     total,
     client: form,
      });

  setConfirmation(resultat);
  viderPanier();
    } catch (err) {
      setErreur("Erreur lors de la commande. Réessayez.");
    } finally {
      setEnvoi(false);
    }
  }

  // Afficher la confirmation
  if (confirmation) {
    return (
      <div className="confirmation">
        <div className="confirmation-box">
          <p className="confirmation-icon">✅</p>
          <h2>Commande confirmée !</h2>
          <p>Numéro : <strong>{confirmation.numeroCommande}</strong></p>
          <p>Un email de confirmation a été envoyé à {form.email}</p>
          <button className="btn-primary" onClick={() => setPage("accueil")}>
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  if (envoi) return <Loading message="Traitement de la commande..." />;
return (
  <div className="commande">
    <button className="btn-retour" onClick={() => setPage("panier")}>
      ← Retour au panier
    </button>

    <h2>Finaliser la commande</h2>

    <div className="paiement">

      {/* Formulaire */}
      <div className="form">
        <h3>Informations de livraison</h3>
        <input name="nom" type="text"  placeholder="Nom complet" value={form.nom}  onChange={handleChange} className="input" />
        <input name="email" type="email" placeholder="Email" value={form.email}  onChange={handleChange} className="input" />
        <input name="adresse"type="text" placeholder="Adresse" value={form.adresse} onChange={handleChange} className="input" />

        <div className="input-row">
          <input name="ville" type="text" placeholder="Ville"value={form.ville} onChange={handleChange} className="input" />
          <input name="codePostal" type="text" placeholder="Code postal"  value={form.codePostal} onChange={handleChange} className="input" />
        </div>

        <h3>Paiement</h3>
        <input name="carte" type="text" placeholder="1234 5678 9012 3456" value={form.carte} onChange={handleChange} className="input" maxLength={19} />

        {erreur && <p className="erreur">{erreur}</p>}
      </div>

      
      <div className="resume">
        <h3>Votre commande ({panier.length} article{panier.length > 1 ? "s" : ""})</h3>

        {panier.map((item) => (
          <div key={`${item.id}-${item.taille}`} className="resume-ligne">
            <span>{item.nom} ({item.taille}) x{item.quantite}</span>
            <span>{(item.prix * item.quantite).toFixed(2)} DH</span>
          </div>
        ))}

        <div className="resume-total">
          <strong>Total : {total.toFixed(2)} DH</strong>
        </div>

        <button className="btn-primary" onClick={soumettreCommande}>
          Confirmer la commande
        </button>
      </div>

    </div>
  </div>
);
}
export default Checkout;
