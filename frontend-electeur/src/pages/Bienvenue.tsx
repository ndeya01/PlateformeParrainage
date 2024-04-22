import React from 'react';
import './Bienvenue.css'
import Chronometre from '../components/Chronometre';
import { Link } from 'react-router-dom';

const Bienvenue = () => {
  return (
    <div className='back'>
      <div className='mt-12 p-4 w-1/2 flex-col justify-center items-center'>
        <Chronometre/>
        <div className="mt-12 flex justify-center space-x-4">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Se connecter
            </button>
          </Link>
          <Link to="/inscription" style={{ textDecoration: "none" }}>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
              Créer un compte
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Bienvenue;
