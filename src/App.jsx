import React, { useState } from 'react';
import CreateAccount from './components/Inscription-Connexion/createAccount';
import Login from './components/Inscription-Connexion/login';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    setShowCreateAccount(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <div>
        {loggedIn ? (
          <div>
            <h1>Bienvenue, {localStorage.getItem('username')}!</h1>
            <button onClick={handleLogout}>Déconnexion</button>
          </div>
        ) : (
          showCreateAccount ? (
            <CreateAccount onLogin={handleLogin} />
          ) : (
            <div>
              <Login onLogin={handleLogin} />
              <button onClick={() => setShowCreateAccount(true)}>Créer son compte</button>
            </div>
          )
        )}
      </div>
    </>
  )
}
