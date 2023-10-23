import React, { useState } from 'react';
import '../assets/styles/createAccount.css';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    if (username && password) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      alert('Compte créé avec succès!');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 d-flex justify-content-center flex-column align-items-center">
            <img src="/src/assets/images/logo-la-manu-box.svg" />
            <form>
              <div className="form-group">
                <h1>S'inscrire</h1>
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
                  <button className="btn btn-dark" onClick={handleCreateAccount}>Se connecter</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
