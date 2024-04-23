import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom'; // Importez useHistory pour gérer la redirection
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate()

    const handleLogin = () => {
        axios.post('https://apex.oracle.com/pls/apex/wksp_parrainnageelection/plateforme_parrainage/authentification/', {
            identifiant: email,
            motDePasse: password
        })
        .then(response => {
            console.log("Réponse de l'API:", response.data);
            if (response.status === 200) {
                navigate('/'); // Rediriger si la connexion est réussie
            } else {
                setError("Nom d'utilisateur ou mot de passe incorrect");
            }
        })
        .catch(error => {
            console.error("Erreur lors de la connexion:", error);
            setError("Une erreur s'est produite lors de la connexion.");
        });
    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <div className="w-1/3 p-6 border rounded-lg shadow-lg bg-white">
                <h2 className="text-2xl font-bold mb-4">Connexion</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <label htmlFor="Email" className="block mb-1">Adresse Email</label>
                    <input type="text" id="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border px-2 py-1" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-1">Mot de passe</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border px-2 py-1" />
                </div>
                <button onClick={handleLogin} className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-blue-600">Se connecter</button>
            </div>
        </div>
    );
}

export default Login;
