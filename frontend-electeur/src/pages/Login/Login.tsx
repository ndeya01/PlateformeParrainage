import React, { useState } from 'react';
import './Login.css'

const Login = () => {
  const [numeroCarteElecteur, setNumeroCarteElecteur] = useState('');
  const [numeroCarteIdentite, setNumeroCarteIdentite] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [bureauVote, setBureauVote] = useState('');
  const [codeAuthentification, setCodeAuthentification] = useState('');
  const [isAuthentifie, setIsAuthentifie] = useState(false);

  const handleValidation = () => {
    // Ici, vous devrez valider les informations saisies
    // Vous pouvez ajouter des validations supplémentaires selon vos besoins
    if (numeroCarteElecteur === '123456789' && numeroCarteIdentite === 'ABC123') {
      setNom('John');
      setPrenom('Doe');
      setDateNaissance('01/01/1980');
      setBureauVote('Bureau de vote 1');
      setIsAuthentifie(true);
    } else {
      alert('Numéro de carte d\'électeur ou de carte d\'identité incorrect');
    }
  };

  const handleSubmit = () => {
    // Envoyer le code d'authentification à votre backend pour vérification
    // Une fois l'authentification réussie, redirigez l'utilisateur vers la page d'accueil
    if (codeAuthentification === '1234') {
      // Redirection vers la page d'accueil
      window.location.href = '/home';
    } else {
      alert('Code d\'authentification incorrect');
    }
  };

  return (
    <div className='office'>
    <div className="max-w-xl mx-auto mt-8 p-6 max-h-60 border rounded shadow-md">
      {!isAuthentifie ? (
        <div>
          <input
            type="text"
            placeholder="Numéro de carte d'électeur"
            value={numeroCarteElecteur}
            onChange={(e) => setNumeroCarteElecteur(e.target.value)}
            className="block w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Numéro de carte d'identité"
            value={numeroCarteIdentite}
            onChange={(e) => setNumeroCarteIdentite(e.target.value)}
            className="block w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
          />
          <button onClick={handleValidation} className="block w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Valider
          </button>
        </div>
      ) : (
        <div>
          <p>Nom: {nom}</p>
          <p>Prénom: {prenom}</p>
          <p>Date de naissance: {dateNaissance}</p>
          <p>Bureau de vote: {bureauVote}</p>
          <input
            type="text"
            placeholder="Code d'authentification"
            value={codeAuthentification}
            onChange={(e) => setCodeAuthentification(e.target.value)}
            className="block w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
          />
          <button onClick={handleSubmit} className="block w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Valider l'authentification
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Login;
