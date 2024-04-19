import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ReferenceLine } from 'recharts';

export default function ParrainageGraph() {

    const seuil = 44231;
    const data = [
        { nom: "Mamadou Diop", parrainages: 18000 },
        { nom: "Aïssatou Fall", parrainages: 22000 },
        { nom: "Boubacar Sow", parrainages: 15000 },
        { nom: "Fatou Ndiaye", parrainages: 50000 },
        { nom: "Moussa Diagne", parrainages: 60000 },
        { nom: "Khady Sarr", parrainages: 55000 },
        { nom: "Amadou Diallo", parrainages: 45000 },
        { nom: "Awa Camara", parrainages: 40000 },
        { nom: "Ibrahim Ndao", parrainages: 38000 },
        { nom: "Ndeye Thiaw", parrainages: 42000 },
        { nom: "Mouhamed Fall", parrainages: 43000 },
      ];

return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
        <strong className="text-gray-700 font-medium">Parrainages</strong>
        <div className="w-full mt-3 flex-1 text-xs">
            <ResponsiveContainer width="100%" height="100%">
                <div className="w-full h-full">
                <BarChart 
                    width={600}
                    height={300} 
                    data={data} 
                    margin={{
                        top: 20,
                        right: 10,
                        left: -10,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="nom" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="parrainages" fill="#8884d8" />
                    <ReferenceLine y={seuil} stroke="red" />
                </BarChart>
                </div>
            </ResponsiveContainer>
        </div>
    </div>
)
}
