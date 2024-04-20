import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function AjouterCandidats({onClose}) {

    const [numeroElecteur, setNumeroElecteur] = useState('');
    const [showForm, setShowForm] = useState(false);

    const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [partiPolitique, setPartiPolitique] = useState('');
  const [slogan, setSlogan] = useState('');
  const [photo, setPhoto] = useState('');
  const [couleurParti1, setCouleurParti1] = useState('');
  const [couleurParti2, setCouleurParti2] = useState('');
  const [couleurParti3, setCouleurParti3] = useState('');
  const [urlPage, setUrlPage] = useState('');
  
    const onSubmitNumeroElecteur = () => {
      // Vérifier si le numéro d'électeur est valide et effectuer les vérifications nécessaires
      // Si le numéro est valide, afficher le formulaire complet
      setShowForm(true);
    };

    const onSubmitComplementaires = () => {
        // Soumettre le formulaire complet ici
        // Vous pouvez accéder aux valeurs des champs du formulaire comme suit :
        // numeroElecteur, nom, prenom, etc.
    };

return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center overflow-hidden">
    <div className="bg-white p-8 rounded-lg z-999 max-h-[400px] max-w-[900px] overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Ajouter Candidat</h1>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>
      {!showForm ? (
        <div>
          <p>Saisissez le numéro de carte d'électeur du candidat :</p>
          <input
            type="text"
            value={numeroElecteur}
            onChange={(e) => setNumeroElecteur(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
          <button onClick={onSubmitNumeroElecteur} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Valider
          </button>
        </div>
      ) : (
        <div className="flex flex-col overflow-auto ">
            <div className="mb-4">
            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom</label>
            <input
                type="text"
                id="prenom"
                name="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="dateNaissance" className="block text-sm font-medium text-gray-700">Date de naissance</label>
            <input
                type="date"
                id="dateNaissance"
                name="dateNaissance"
                value={dateNaissance}
                onChange={(e) => setDateNaissance(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
            <input
                type="tel"
                id="telephone"
                name="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="partiPolitique" className="block text-sm font-medium text-gray-700">Parti politique</label>
            <input
                type="text"
                id="partiPolitique"
                name="partiPolitique"
                value={partiPolitique}
                onChange={(e) => setPartiPolitique(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="slogan" className="block text-sm font-medium text-gray-700">Slogan</label>
            <input
                type="text"
                id="slogan"
                name="slogan"
                value={slogan}
                onChange={(e) => setSlogan(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo</label>
            <input
                type="file"
                id="photo"
                name="photo"
                value={photo}
                onChange={(e) => setPhoto(e.target.files[0])}
                className="mt-1 p-2 border rounded-md w-full"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="couleurParti1" className="block text-sm font-medium text-gray-700">Couleur parti 1</label>
            <input
                type="color"
                id="couleurParti1"
                name="couleurParti1"
                value={couleurParti1}
                onChange={(e) => setCouleurParti1(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="couleurParti2" className="block text-sm font-medium text-gray-700">Couleur parti 2</label>
            <input
                type="color"
                id="couleurParti2"
                name="couleurParti2"
                value={couleurParti2}
                onChange={(e) => setCouleurParti2(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="couleurParti3" className="block text-sm font-medium text-gray-700">Couleur parti 3</label>
            <input
                type="color"
                id="couleurParti3"
                name="couleurParti3"
                value={couleurParti3}
                onChange={(e) => setCouleurParti3(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="urlPage" className="block text-sm font-medium text-gray-700">URL vers la page d'informations</label>
            <input
                type="url"
                id="urlPage"
                name="urlPage"
                value={urlPage}
                onChange={(e) => setUrlPage(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
            />
            </div>
            <button onClick={onSubmitComplementaires} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Terminer
          </button>
        </div>
      )}
    </div>
  </div>
);
}