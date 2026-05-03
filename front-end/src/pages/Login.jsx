import { useState } from "react";
import { loginUtilisateur, inscrireUtilisateur } from "../data/auth";
import Loading from "../components/Loading";

function Login({ setUtilisateur, setPage }) {
    const [onglet, setOnglet] = useState("connexion"); // "connexion" ou "inscription"
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");

    const [nom, setNom] = useState("");
    const [emailInscription, setEmailInscription] = useState("");
    const [mdpInscription, setMdpInscription] = useState("");
    const [mdpConfirm, setMdpConfirm] = useState("");

    const [chargement, setChargement] = useState(false);
    const [erreur, setErreur] = useState(null);
    const [succes, setSucces] = useState(null);

    // Connexion avec async/await
    async function handleLogin() {
        if (!email || !motDePasse) {
            setErreur("Veuillez remplir tous les champs.");
            return;
        }
        setErreur(null);
        setChargement(true);

        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password: motDePasse
            })
        }).then((res) => res.json())
            .then((data) => {
                if (data.user) {
                    setUtilisateur(data.user);
                    setPage("produits");
                } else {
                    setErreur(data.message);
                }
            })
            .catch(err =>
                setErreur(err.message))
            .finally(() => setChargement(false))

    }

    // Inscription avec async/await
    async function handleInscription() {
        if (!nom || !emailInscription || !mdpInscription || !mdpConfirm) {
            setErreur("Veuillez remplir tous les champs.");
            return;
        }
        if (mdpInscription !== mdpConfirm) {
            setErreur("Les mots de passe ne correspondent pas.");
            return;
        }
        if (mdpInscription.length < 4) {
            setErreur("Le mot de passe doit contenir au moins 4 caractères.");
            return;
        }
        setErreur(null);
        try {
            setChargement(true);
            const user = await inscrireUtilisateur(nom, emailInscription, mdpInscription);
            setSucces(`Compte créé ! Bienvenue ${user.nom}`);
            setTimeout(() => {
                setUtilisateur(user);
                setPage("accueil");
            }, 5500);
        } catch (err) {
            setErreur(err.message);
        } finally {
            setChargement(false);
        }
    }

    function changerOnglet(val) {
        setOnglet(val);
        setErreur(null);
        setSucces(null);
    }

    if (chargement) return <Loading message={onglet + " en cours..."} />;

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-logo">StyleShop</div>
                {/* Onglets */}
                <div className="login-tabs">
                    <button
                        className={onglet === "connexion" ? "tab-btn active" : "tab-btn"}
                        onClick={() => changerOnglet("connexion")}
                    >
                        Connexion
                    </button>
                    <button
                        className={onglet === "inscription" ? "tab-btn active" : "tab-btn"}
                        onClick={() => changerOnglet("inscription")}
                    >
                        Inscription
                    </button>
                </div>

                {/* Messages */}
                {erreur && <p className="login-erreur">{erreur}</p>}
                {succes && <p className="login-succes">{succes}</p>}

                {onglet === "connexion" && (
                    <div className="login-form">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="exemple@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="login-input"
                        />
                        <label>Mot de passe</label>
                        <input
                            type="password"
                            placeholder="Votre mot de passe"
                            value={motDePasse}
                            onChange={(e) => setMotDePasse(e.target.value)}
                            className="login-input"
                        />
                        <button className="btn-login" onClick={handleLogin}>
                            Se connecter
                        </button>

                        <p className="login-hint">
                            Compte test : <strong>israe@test.com</strong> / <strong>123</strong>
                        </p>
                    </div>
                )}

                {onglet === "inscription" && (
                    <div className="login-form">
                        <label>Nom complet</label>
                        <input
                            type="text"
                            placeholder="Votre nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            className="login-input"
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="exemple@email.com"
                            value={emailInscription}
                            onChange={(e) => setEmailInscription(e.target.value)}
                            className="login-input"
                        />
                        <label>Mot de passe</label>
                        <input
                            type="password"
                            placeholder="Minimum 4 caractères"
                            value={mdpInscription}
                            onChange={(e) => setMdpInscription(e.target.value)}
                            className="login-input"
                        />
                        <label>Confirmer le mot de passe</label>
                        <input
                            type="password"
                            placeholder="Répéter le mot de passe"
                            value={mdpConfirm}
                            onChange={(e) => setMdpConfirm(e.target.value)}
                            className="login-input"
                        />
                        <button className="btn-login" onClick={handleInscription}>
                            Créer mon compte
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
