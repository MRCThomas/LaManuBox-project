import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/styles/Login.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

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
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 d-flex justify-content-center flex-column align-items-center">
                        <form>
                            <div className="form-group">
                                <h1>Connexion</h1>
                                <label htmlFor="identifiant">Identifiant</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nom d'utilisateur"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <label htmlFor="mot de passe">Mot de passe</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Mot de passe"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-dark" onClick={handleLogin}>Se connecter</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Login;
