import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate(); // Récupérez l'objet navigate

    const handleLogin = () => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            alert('Connexion réussie!');
            navigate('/home'); // Redirigez l'utilisateur vers la page d'accueil
        } else {
            alert('Nom d\'utilisateur ou mot de passe incorrect.');
        }
    }

    return (
        <>
            <div>
                <h1>Connexion</h1>
                <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Se connecter</button>
            </div>
        </>
    );
}

export default Login;
