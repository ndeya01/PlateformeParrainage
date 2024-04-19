import React from 'react'

export default function Electeurs() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Fichier sélectionné :", file);
    // Vous pouvez maintenant traiter le fichier ici, par exemple envoyer le fichier au serveur pour traitement
  };

  return (
    <div className="flex justify-center mt-8">
      <label htmlFor="csvFile" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer focus:outline-none focus:shadow-outline">
        Charger la liste des électeurs
        <input
          id="csvFile"
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}
