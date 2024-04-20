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
      photo: "https://img.freepik.com/photos-gratuite/portrait-homme-affaires-prospere-confiant-habille-chemise-jean-decontractee_273609-28356.jpg",
      couleurParti1: "rouge",
      couleurParti2: "bleu",
      couleurParti3: "vert",
      urlPage: "https://example.com/john-doe",
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-lg bg-white shadow-md rounded-md p-6 max-h-[700px] overflow-auto">
        {candidatsInfo.map((candidat, index) => (
          <div key={index} className="mb-6">
            <div>
              <img src={candidat.photo} alt="Photo du candidat" className="w-sm h-auto" />
            </div>
            <div>
              <p className="font-semibold mb-1">{candidat.prenom} {candidat.nom}</p>
              <p className="font-semibold mb-1">{candidat.slogan}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Numéro d'électeur: <span>{candidat.numeroElecteur}</span></p>
            </div>
            <div>
              <p className="font-semibold mb-1">Date de naissance: <span>{candidat.dateNaissance}</span></p>
            </div>
            <div>
              <p className="font-semibold mb-1">Adresse email: <span>{candidat.email}</span></p>
            </div>
            <div>
              <p className="font-semibold mb-1">Numéro de téléphone: <span>{candidat.telephone}</span></p>
            </div>
            <div>
              <p className="font-semibold mb-1">Parti politique: <span>{candidat.partiPolitique}</span></p>
            </div>
            <div>
              <p className="font-semibold mb-1">Couleur parti: {candidat.couleurParti1}, {candidat.couleurParti2}, {candidat.couleurParti3}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Page d'informations: <span>{candidat.urlPage}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilCandidats;
