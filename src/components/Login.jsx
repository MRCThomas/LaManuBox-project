import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/Login.css';
import { AuthContext } from '../context/AuthContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext)
    console.log(authContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            alert('Connexion réussie!');
            authContext.handleLogin();
            navigate('/', { replace: true }); // Redirigez l'utilisateur vers la page d'accueil
        } else {
            alert('Nom d\'utilisateur ou mot de passe incorrect.');
        }
    }
    
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 d-flex justify-content-center flex-column align-items-center">
                        <img src="/src/assets/images/logo-la-manu-box.svg" />
                        <form action="" method='post'>
                            <div className="form-group">
                                <h1>Se connecter</h1>
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
                                    type="current-password"
                                    className="form-control"
                                    placeholder="Mot de passe"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="d-flex justify-content-center" id='login-btn'>
                                    <button className='btn btn-dark' type="button" onClick={handleLogin}>Se connecter</button>
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
