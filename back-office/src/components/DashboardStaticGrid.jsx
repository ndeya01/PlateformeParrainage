import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaVoteYea } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";

const DashboardStaticGrid = () => {
  return (
    <div className='flex gap-4 w-full'>
      <BoxTrapper >
        <div className='rounded-full h-10 w-10 flex items-center justify-center bg-sky-500'>
          <FaPeopleGroup className='text-2xl text-white'/>
        </div>
        <div className="pl-4">
          <span className='text-sm text-gray-500 font-light'>Total Electeurs</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>4.394.500</strong>
          </div>
        </div>
      </BoxTrapper>
      <BoxTrapper >
      <div className='rounded-full h-10 w-10 flex items-center justify-center bg-green-600'>
          <BsFillPersonCheckFill className='text-2xl text-white'/>
        </div>
        <div className="pl-4">
          <span className='text-sm text-gray-500 font-light'>Total Candidats</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>23</strong>
          </div>
        </div>
      </BoxTrapper>
      <BoxTrapper >
      <div className='rounded-full h-10 w-10 flex items-center justify-center bg-yellow-400'>
          <FaVoteYea className='text-2xl text-white'/>
        </div>
        <div className="pl-4">
          <span className='text-sm text-gray-500 font-light'>Total Parrainages</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>2.694.500</strong>
            <span className='text-green-500 text-sm pl-2'> 61%</span>
          </div>
        </div>
      </BoxTrapper>
      <BoxTrapper >
      <div className='rounded-full h-10 w-10 flex items-center justify-center bg-orange-600'>
          <IoPersonRemove className='text-2xl text-white'/>
        </div>
        <div className="pl-4">
          <span className='text-sm text-gray-500 font-light'>Reste Parrainages</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>1.700.000</strong>
            <span className='text-green-500 text-sm pl-2'> 39%</span>
          </div>
        </div>
      </BoxTrapper>
    </div>
  );
}

export default DashboardStaticGrid;

function BoxTrapper({children}) {
  return (
    <div className='bg-white rounded-sm px-4 flex-1 border-gray-200 flex items-center'>{children}</div>
  );
}
