import React from 'react'
import '../assets/styles/HeaderLogin.css'
import { NavLink } from 'react-router-dom'

export default function HeaderLogin() {
    return (
        <header>
            <div className="p-3">
                <div className='btn'>
                    <NavLink to="/"><button className="custom-btn" type="button">Retour à l'accueil</button></NavLink>
                </div>
            </div>

        </header>
    )
}