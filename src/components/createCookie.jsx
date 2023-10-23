import React from 'react';

function createCookie(name, value, days, options = {}) {
  let expires = '';

  if (days) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `expires=${expirationDate.toUTCString()};`;
  }

  const cookieString = `${name}=${value};${expires}path=${options.path || '/'};`;

  if (options.domain) {
    cookieString += `domain=${options.domain};`;
  }

  if (options.secure) {
    cookieString += 'secure;';
  }

  document.cookie = cookieString;
}

function UserStateComponent() {
  const handleCreateCookie = () => {
    createCookie('monCookie', 'valeur_du_cookie', 7); // Crée un cookie valable pendant 7 jours
  };

  return (
    <div>
      <h1>Gestion des cookies</h1>
      <button onClick={handleCreateCookie}>Créer un cookie</button>
    </div>
  );
}

export default UserStateComponent;
