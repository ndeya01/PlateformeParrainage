import {FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className='bg-gray-700 px-4 py-2 flex justify-between'>
      <div className="flex items-center texte-xl">
      <div className='relative md:w-65'>
          <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
            <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch/></button>
          </span>
          <input type="text" className='w-full px-4 pl-12 rounded shadow outline-none hidden md:block '/>
        </div>
      </div>
      <div className="flex items-center gap-x-5">
        <div className='text-white'>
          <FaBell className='w-6 h-6'/>
        </div>

        <div className='relative'>
          <button className="text-white group">
          <FaUserCircle className='w-6 h-6 mt-1'/>
            <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
              <ul className='py-2 text-sm text-gray-900' >
                <li> Profil</li>
                <li> Parametres</li>
                <li> Se deconnecter</li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
