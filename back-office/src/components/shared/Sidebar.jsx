import { FaHome, FaCog, FaPoll } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6';
import { MdDashboard } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
        const [activeLink, setActiveLink] = useState(""); // État pour suivre le lien actif
      
        const handleSetActiveLink = (link) => {
          setActiveLink(link);
    };

  return (
    <div className='flex flex-col w-60 bg-gray-800 px-4 py-2 h-full'>
      <div className='my-2 mb-4'>
        <h1 className='text-2x text-white font-bold'>Plateforme DGE</h1>
      </div>
      <hr/>
      <ul className='mt-3 text-white font-bold'>
        <li className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ${activeLink === "/" && "bg-blue-500"}`}>
            <Link to="/" className='px-3' onClick={() => handleSetActiveLink("/")}>
                <FaHome className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                 Accueil
            </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ${activeLink === "/dashboard" && "bg-blue-500"}`}>
            <Link to="dashboard" className='px-3' onClick={() => handleSetActiveLink("/dashboard")}>
                <MdDashboard className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                Dashboard
            </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ${activeLink === "/parrainage" && "bg-blue-500"}`}>
            <Link to="/parrainage" className='px-3' onClick={() => handleSetActiveLink("/parrainage")}>
                <AiFillDashboard className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                Parrainage
            </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ${activeLink === "/electeurs" && "bg-blue-500"}`}>
            <Link to="/electeurs" className='px-3' onClick={() => handleSetActiveLink("/electeurs")}>
                <FaPeopleGroup className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                Electeurs
            </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ${activeLink === "/candidats" && "bg-blue-500"}`}>
            <Link to="/candidats" className='px-3'onClick={() => handleSetActiveLink("/candidats")}>
                <BsFillPersonCheckFill className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                Candidats
            </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ${activeLink === "/parametre" && "bg-blue-500"}`}>
            <Link to="/parametre" className='px-3'onClick={() => handleSetActiveLink("/parametre")}>
                <FaCog className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                Paramètres
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
