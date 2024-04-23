import { useState } from "react";
import './Inscription.css'

const Inscription = () => {
  const [numeroCarteElecteur, setNumeroCarteElecteur] = useState("");
  const [numeroCarteIdentite, setNumeroCarteIdentite] = useState("");
  const [nom, setNom] = useState("");
  const [bureauVote, setBureauVote] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [isInfosCompletes, setIsInfosCompletes] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier la cohérence et la complétude des informations
    if (numeroCarteElecteur && numeroCarteIdentite && nom && bureauVote ) {
      setIsInfosCompletes(true);
    } else {
      alert("Veuillez saisir toutes les informations requises.");
    }
  };

  const handleValide = () => {
    // Envoyer le code d'authentification à votre backend pour vérification
    // Une fois l'authentification réussie, redirigez l'utilisateur vers la page d'accueil
    if (telephone !== '785949574') {
      // Redirection vers la page d'accueil
      window.location.href = '/login';
    } else {
      alert('Numero déjà utilisé');
    }
  };

  return (
    <div className="image">
      {!isInfosCompletes ? (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="numeroCarteElecteur">Numéro de carte d'électeur</label>
            <input
              type="text"
              id="numeroCarteElecteur"
              value={numeroCarteElecteur}
              onChange={(e) => setNumeroCarteElecteur(e.target.value)}
              className="block w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="numeroCarteIdentite">Numéro de carte d'identité</label>
            <input
              type="text"
              id="numeroCarteIdentite"
              value={numeroCarteIdentite}
              onChange={(e) => setNumeroCarteIdentite(e.target.value)}
              className="block w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="nom">Nom de famille</label>
            <input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="block w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="bureauVote">Numéro de bureau de vote</label>
            <input
              type="text"
              id="bureauVote"
              value={bureauVote}
              onChange={(e) => setBureauVote(e.target.value)}
              className="block w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-700">Suivant</button>
        </form>
        ) : (
        <div className="max-w-md mx-auto">
          <p className="text-xl font-semibold mb-4">Saisir votre numéro de téléphone et adresse email</p>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Adresse email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="telephone">Numéro de téléphone</label>
            <input
              type="tel"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="block w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button type="button" onClick={handleValide} className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-700">S'inscrire</button>
        </div>
        )}
    </div>
  );
};

export default Inscription;
