import React, { useState } from "react";
import sonko from "../assets/000_33BC4QE.jpg"

const UserCard = ({ candidat, onParrainer }) => {
  const { id, nom, prenom, photo, slogan,party } = candidat;

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-1 max-w-xs max-h-full">
      <img src={photo} alt={`${prenom} ${nom}`} className="w-full h-1/2 rounded-md mb-4" />
      <div className="text-center">
        <h2 className="text-lg font-semibold">{prenom} {nom}</h2>
        <p className="text-gray-600 mb-2">{party}</p>
        <p className="text-gray-800 mb-4">{slogan}</p>
        <div className="flex flex-col">
        <a href={`/profile/${id}`} className="text-blue-500 hover:underline mb-2">Voir le profil</a>
        <button onClick={onParrainer} className="bg-blue-500 text-white rounded-md py-1 px-2 hover:bg-green-500 text-sm w-20 items-center self-center">
          Parrainer
        </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
