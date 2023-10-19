import React, { useState } from 'react';

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
    <div>
      <h1>Création de compte</h1>
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
      <button onClick={handleCreateAccount}>Créer un compte</button>
    </div>
  );
}

export default CreateAccount;
