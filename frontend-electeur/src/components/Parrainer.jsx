import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Parrainer = ({ closeModal }) => {
  const [numeroUnique, setNumeroUnique] = useState("");
  const [numeroSaisi, setNumeroSaisi] = useState("");
  const [isValide, setIsValide] = useState(false);

  const genererNumeroUnique = () => {
    // Logique pour générer un numéro de 5 chiffres unique
    const numero = Math.floor(10000 + Math.random() * 90000);
    setNumeroUnique(numero.toString());
    
    // Envoi du numéro à l'e-mail et au téléphone de l'utilisateur
    // Vous pouvez utiliser une API pour envoyer des e-mails et des SMS
  };

  const validerNumero = () => {
    if (numeroSaisi === "12345") { // Vérification avec le numéro 12345
      setIsValide(true);
      // Logique pour valider le choix de l'utilisateur
    } else {
      alert("Le numéro saisi est incorrect. Veuillez réessayer.");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center overflow-hidden">
      <div className="bg-white p-8 rounded-lg z-999 max-h-[400px] max-w-[900px] overflow-auto">
        {!isValide ? (
          <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Parrainer votre candidat</h2>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <IoMdClose className="h-6 w-6" />
                </button>
            </div>
            <p className="mb-4">Un numéro de 5 chiffres vous sera envoyé par e-mail et téléphone.</p>
            <button onClick={genererNumeroUnique} className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-700 mb-4">
              Recevoir le numéro unique
            </button>
            <input
              type="text"
              placeholder="Entrez le numéro reçu"
              value={numeroSaisi}
              onChange={(e) => setNumeroSaisi(e.target.value)}
              className="block w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
            />
            <button onClick={validerNumero} className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-green-500">
              Valider
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
            <p className="mb-4">Votre choix a été validé avec succès.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Parrainer;
