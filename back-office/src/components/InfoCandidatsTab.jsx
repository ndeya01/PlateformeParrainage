const InfoCandidatsTab = () => {
    const data = [
        { 
            id: 1,
          nom: "Mamadou Diop", 
          age: 45, 
          sexe: "Homme", 
          parrainages: 18000,
            numero:123456789012,
          parti_politique: "Parti pour le Progrès et le Socialisme (PPS)"
        },
        { 
            id: 2,
          nom: "Aïssatou Fall", 
          age: 38, 
          sexe: "Femme", 
          parrainages: 22000,
          numero:239434394954,
          parti_politique: "Union pour le Renouveau Démocratique (URD)"
        },
        { 
            id: 3,
          nom: "Boubacar Sow", 
          age: 52, 
          sexe: "Homme", 
          parrainages: 15000,
          numero:122838233925,
          parti_politique: "Mouvement Citoyen pour la Démocratie (MCD)"
        },
        { 
          id: 4,
          nom: "Fatou Ndiaye", 
          age: 40, 
          sexe: "Femme", 
          parrainages: 50000,
          numero:324959023732,
          parti_politique: "Coalition pour l'Espoir et le Progrès (CEP)"
        },
        { 
            id: 5,
          nom: "Moussa Diagne", 
          age: 48, 
          sexe: "Homme", 
          parrainages: 60000,
          numero:304958797323,
          parti_politique: "Rassemblement pour la Démocratie et le Progrès (RDP)"
        },
        { 
            id: 6,
          nom: "Khady Sarr", 
          age: 35, 
          sexe: "Femme", 
          parrainages: 55000,
            numero:393012049231,
          parti_politique: "Mouvement des Forces Vives (MFV)"
        },
        { 
            id: 7,
          nom: "Amadou Diallo", 
          age: 50, 
          sexe: "Homme", 
          parrainages: 45000,
          numero:594323095492,
          parti_politique: "Alliance pour la Justice et la Démocratie (AJD)"
        },
        { 
            id: 8,
          nom: "Awa Camara", 
          age: 42, 
          sexe: "Femme", 
          parrainages: 40000,
          numero:459390223903,
          parti_politique: "Front pour la Libération et la Démocratie (FLD)"
        },
        { 
          id: 9,
          nom: "Ibrahim Ndao", 
          age: 55, 
          sexe: "Homme", 
          parrainages: 38000,
          numero:200148659339,
          parti_politique: "Mouvement pour la Renaissance Démocratique (MRD)"
        },
        { 
            id: 10,
          nom: "Ndeye Thiaw", 
          age: 37, 
          sexe: "Femme", 
          parrainages: 42000,
            numero:199450950304,
          parti_politique: "Parti pour l'Unité et le Progrès (PUP)"
        },
        { 
            id: 11,
          nom: "Mouhamed Fall", 
          age: 47, 
          sexe: "Homme", 
          parrainages: 43000,
          numero:320695829593,
          parti_politique: "Union pour la Démocratie et le Progrès (UDP)"
        },
      ];
      
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Evolution des candidats</strong>
      <div className="mt-3">
        <table className="w-full text-gray-700 border-collapse">
            <thead>
                <tr className="bg-gray-200">
                <th className="px-4 py-2">NIN</th>
                    <th className="px-4 py-2">Nom</th>
                    <th className="px-4 py-2">Age</th>
                    <th className="px-4 py-2">Sexe</th>
                    <th className="px-4 py-2">Parti politique</th>
                    <th className="px-4 py-2">Parrainages</th>
                </tr>
            </thead>
            <tbody>
                {data.map((candidat) => (
                    <tr key={candidat.id} className="border-b">
                        <td className="px-4 py-2">{candidat.numero}</td>
                        <td className="px-4 py-2">{candidat.nom}</td>
                        <td className="px-4 py-2">{candidat.age}</td>
                        <td className="px-4 py-2">{candidat.sexe}</td>
                        <td className="px-4 py-2">{candidat.parti_politique}</td>
                        <td className="px-4 py-2">{candidat.parrainages}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default InfoCandidatsTab;
