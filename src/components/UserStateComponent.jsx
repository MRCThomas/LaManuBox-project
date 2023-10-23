import React from 'react';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

function UserStateComponent() {
    const authContext = useContext(AuthContext);
    return (
        <div>
                <div>
                    <p>Utilisateur connecté</p>
                    <button  className='btn btn-dark' onClick={authContext.handleLogout}>Se déconnecter</button>
                </div>
        </div>
    );
}

export default UserStateComponent;
