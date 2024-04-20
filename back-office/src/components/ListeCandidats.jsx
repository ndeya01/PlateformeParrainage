import { useState } from "react";
import ProfilCandidats from "./ProfilCandidats";

const ListeCandidats = () => {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "John Doe",
      party: "Independent",
      slogan: "Vote for change",
      // Ajoutez d'autres propriétés de candidat ici
    },
    {
      id: 2,
      name: "Jane Smith",
      party: "Green Party",
      slogan: "Protect the environment",
      // Ajoutez d'autres propriétés de candidat ici
    },
    // Ajoutez d'autres candidats au besoin
  ]);

  const [selectedCandidateId, setSelectedCandidateId] = useState(null);

  // Gérer le clic sur un candidat
  const handleCandidateClick = (id) => {
    setSelectedCandidateId(id);
  };

  // Gérer le clic en dehors du profil pour fermer la page du profil
  const handleOutsideClick = () => {
    setSelectedCandidateId(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Liste des candidats</h1>
      <div className="grid grid-cols-2 gap-4">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="p-4 border border-gray-200 rounded-md bg-white cursor-pointer" onClick={() => handleCandidateClick(candidate.id)}>
            <h2 className="text-xl font-semibold">{candidate.name}</h2>
            <p className="text-gray-600">Parti politique: {candidate.party}</p>
            <p className="text-gray-600">Slogan: {candidate.slogan}</p>
            {/* Ajoutez d'autres détails du candidat ici */}
          </div>
        ))}
      </div>
      {selectedCandidateId && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center" onClick={handleOutsideClick}>
          <div className="w-full max-w-md bg-white shadow-md rounded-md p-6">
            <h1 className="text-2xl font-bold mb-4">Informations du candidat</h1>
            <ProfilCandidats candidat={candidates.find((candidate) => candidate.id === selectedCandidateId)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ListeCandidats;
