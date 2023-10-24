import React from 'react'
import '../assets/styles/HeaderCreateAccount.css'
import { NavLink } from 'react-router-dom'

export default function HeaderCreateAccount() {
    return (
        <header>
            <nav className='p-3 container-btn'>
                <div className='btn'>
                    <NavLink to="/"><button className="custom-btn-transparent" type="button">Retour à l'accueil</button></NavLink>
                </div>
                <div className='btn'>
                    <NavLink to="login"><button className="custom-btn-white" type="button">Se connecter</button></NavLink>
                </div>
            </nav>
        </header>
    )
}