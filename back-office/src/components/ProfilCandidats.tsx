import React from "react";

const ProfilCandidats = () => {
  // Données fictives de candidats
  const candidatsInfo = [
    {
      numeroElecteur: "123456",
      nom: "Doe",
      prenom: "John",
      dateNaissance: "1990-01-01",
      email: "john.doe@example.com",
      telephone: "123-456-7890",
      partiPolitique: "Independent",
      slogan: "Vote for change",
      photo: "john-doe.jpg",
      couleurParti1: "#FF0000",
      couleurParti2: "#00FF00",
      couleurParti3: "#0000FF",
      urlPage: "https://example.com/john-doe",
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-md bg-white shadow-md rounded-md p-6 max-h-[500px] overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Informations du candidat</h1>
        {candidatsInfo.map((candidat, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Candidat {index + 1}</h2>
            <div>
              <p className="font-semibold mb-1">Numéro d'électeur:</p>
              <p>{candidat.numeroElecteur}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Nom:</p>
              <p>{candidat.nom}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Prénom:</p>
              <p>{candidat.prenom}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Date de naissance:</p>
              <p>{candidat.dateNaissance}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Adresse email:</p>
              <p>{candidat.email}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Numéro de téléphone:</p>
              <p>{candidat.telephone}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Parti politique:</p>
              <p>{candidat.partiPolitique}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Slogan:</p>
              <p>{candidat.slogan}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Photo:</p>
              <p>{candidat.photo}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Couleur parti 1:</p>
              <p>{candidat.couleurParti1}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Couleur parti 2:</p>
              <p>{candidat.couleurParti2}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Couleur parti 3:</p>
              <p>{candidat.couleurParti3}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">URL vers la page d'informations:</p>
              <p>{candidat.urlPage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilCandidats;
