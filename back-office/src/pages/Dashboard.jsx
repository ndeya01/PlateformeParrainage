import DashboardStaticGrid from "../components/DashboardStaticGrid";
import InfoCandidatsTab from "../components/InfoCandidatsTab";
import ParrainageCercle from "../components/ParrainageCercle";
import ParrainageGraph from "../components/ParrainageGraph";

export default function Dashboard() {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStaticGrid/>
      <div className="flex flex-row gap-4 w-full">
        <ParrainageGraph/>
        <ParrainageCercle/>
      </div>
      <div className="flex gap-4 w-full">
        <InfoCandidatsTab/>
      </div>
    </div>
  )
}
