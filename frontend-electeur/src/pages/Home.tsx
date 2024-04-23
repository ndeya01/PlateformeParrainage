import React, { useState } from "react";
import UserCard from "../components/UserCard";
import Parrainer from "../components/Parrainer";

const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Liste des candidats
  const candidats = [
    {
      id: 1,
      nom: "Doe",
      prenom: "John",
      photo: "https://img.freepik.com/photos-gratuite/portrait-homme-affaires-prospere-confiant-habille-chemise-jean-decontractee_273609-28356.jpg",
      party: "Independent",
      slogan: "Vote for change",
    },
    {
      id: 2,
      nom: "Smith",
      prenom: "Alice",
      photo: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/783f/live/01221cf0-e6c6-11ee-9410-0f893255c2a0.jpg",
      party: "Green Party",
      slogan: "Protect the environment",
    },
    {
      id: 3,
      nom: "Doe",
      prenom: "John",
      photo: "https://s.france24.com/media/display/e8c066f2-ce4e-11ed-8c3c-005056a90321/w:1280/p:1x1/000_33BC4QE.jpg",
      party: "Independent",
      slogan: "Vote for change",
    },
    {
      id: 4,
      nom: "Smith",
      prenom: "Alice",
      photo: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/783f/live/01221cf0-e6c6-11ee-9410-0f893255c2a0.jpg",
      party: "Green Party",
      slogan: "Protect the environment",
    },
    {
      id: 5,
      nom: "Doe",
      prenom: "John",
      photo: "https://s.france24.com/media/display/e8c066f2-ce4e-11ed-8c3c-005056a90321/w:1280/p:1x1/000_33BC4QE.jpg",
      party: "Independent",
      slogan: "Vote for change",
    },
    {
      id: 6,
      nom: "Smith",
      prenom: "Alice",
      photo: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/783f/live/01221cf0-e6c6-11ee-9410-0f893255c2a0.jpg",
      party: "Green Party",
      slogan: "Protect the environment",
    },
    // Ajoutez d'autres candidats si nécessaire
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {candidats.map((candidat) => (
          <UserCard key={candidat.id} candidat={candidat} onParrainer={openModal} />
        ))}
      </div>
      {isModalOpen && <Parrainer closeModal={closeModal} />}
    </div>
  );
};

export default Home;
