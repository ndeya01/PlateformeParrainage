import React, { useState } from 'react'
import AjouterCandidats from '../components/AjouterCandidats'
import ListeCandidats from '../components/ListeCandidats';

export default function Candidats() {
  const [afficherAjouterCandidat, setAfficherAjouterCandidat] = useState(false);

  const ouvrirAjouterCandidat = () => {
    setAfficherAjouterCandidat(true);
  };

  const fermerAjouterCandidat = () => {
    setAfficherAjouterCandidat(false);
  };

  return (
    <div className='flex flex-col gap-4'>
      <button
        onClick={ouvrirAjouterCandidat}
        className="bg-gray-900 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Ajouter candidat
      </button>
      {afficherAjouterCandidat && (
        <AjouterCandidats onClose={fermerAjouterCandidat} />
      )}
      <ListeCandidats/>
    </div>
  );
}
