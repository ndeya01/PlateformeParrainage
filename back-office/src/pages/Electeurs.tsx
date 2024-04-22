import React, { useState } from 'react';
import crypto from 'crypto';

export default function Electeurs() {
  const [checksum, setChecksum] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Fichier sélectionné :", selectedFile);
    setFile(selectedFile);
  };

  const handleChecksumChange = (event) => {
    setChecksum(event.target.value);
  };

  const handleUpload = () => {
    // Vérification de l'empreinte CHECKSUM
    const hash = crypto.createHash('sha256');
    hash.update(file);
    const calculatedChecksum = hash.digest('hex');
    if (calculatedChecksum === checksum) {
      console.log('Empreinte CHECKSUM vérifiée avec succès');
      // Envoyer le fichier au serveur pour traitement
      // Ici, vous pouvez ajouter la logique pour envoyer le fichier
    } else {
      console.error('Empreinte CHECKSUM incorrecte');
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <label htmlFor="checksum" className="mb-4">
        Empreinte CHECKSUM (SHA256):
        <input
          id="checksum"
          type="text"
          value={checksum}
          onChange={handleChecksumChange}
          className="ml-2 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
          placeholder="Saisissez l'empreinte CHECKSUM"
        />
      </label>
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
      <button onClick={handleUpload} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Envoyer
      </button>
    </div>
  );
}
