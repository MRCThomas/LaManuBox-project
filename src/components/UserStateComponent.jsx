import React from 'react';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

function UserStateComponent() {
    const authContext = useContext(AuthContext);
    return (
        <div>
            <button className='btn btn-dark ' onClick={authContext.handleLogout}>Se déconnecter</button>
        </div>
    );
}

export default UserStateComponent;
