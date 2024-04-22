import React from "react";

const Profil = () => {
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
      urlPage: "https://example.com/john-doe",
    },
  ];

  const partyColors = ["#FF0000", "#0000FF", "#00FF00"];

  return (
    <div className="container mx-auto px-4 fixed top-0 left-0  h-full bg-gray-800 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {candidatsInfo.map((candidat, index) => (
          <div key={index} className="p-6 md:flex md:items-center md:space-x-6">
            <img src={candidat.photo} alt="Photo du candidat" className="w-48 h-48 rounded-full md:rounded-md md:w-60 md:h-60 object-cover" />
            <div className="md:flex-1">
              <p className="text-2xl font-semibold">{candidat.prenom} {candidat.nom}</p>
              <p className="text-gray-600 text-lg mb-4">{candidat.slogan}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="col-span-2 flex items-center">
                  <p className="font-semibold mr-2">Couleurs du parti:</p>
                  {partyColors.map((color, index) => (
                    <div key={index} className="w-6 h-6 rounded-full" style={{ backgroundColor: color, marginRight: '4px' }}></div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold mb-1">Parti politique:</p>
                  <p>{candidat.partiPolitique}</p>
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
              </div>
              <div>
                <p className="font-semibold mb-1">Page d'informations:</p>
                <a href={candidat.urlPage} className="text-blue-600 hover:underline">{candidat.urlPage}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profil;
