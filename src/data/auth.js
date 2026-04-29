const utilisateursData = [
  {
    id: 1,
    nom: "Karim Benali",
    email: "karim@email.com",
    motDePasse: "1234",
    avatar: "KB",
  },
  {
    id: 2,
    nom: "Sara Idrissi",
    email: "sara@email.com",
    motDePasse: "abcd",
    avatar: "SI",
  },
  {
    id: 3,
    nom: "Ali",
    email: "Ali@example.com",
    motDePasse: "1232",
    avatar: " AR",
  }
];

export function loginUtilisateur(email, motDePasse) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = utilisateursData.find(
        (u) => u.email === email && u.motDePasse === motDePasse
      );
      if (user) {
        const { motDePasse: _, ...userSansMotDePasse } = user;
        resolve(userSansMotDePasse);
      } else {
        reject(new Error("Email ou mot de passe incorrect."));
      }
    }, 900);
  });
}

export function inscrireUtilisateur(nom, email, motDePasse) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dejaExiste = utilisateursData.find((u) => u.email === email);
      if (dejaExiste) {
        reject(new Error("Cet email est déjà utilisé."));
        return;
      }
      const nouvelUtilisateur = {
        id: utilisateursData.length + 1,
        nom,
        email,
        avatar: nom.slice(0, 2).toUpperCase(),
      };
      utilisateursData.push({ ...nouvelUtilisateur, motDePasse });
      resolve(nouvelUtilisateur);
    }, 900);
  });
}