import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className='container'>
            <nav>
                <NavLink to="/">
                    <img src="" alt="La Manu Box" />
                </NavLink>
            <div>
                <NavLink to="contact">Nos boxes</NavLink>
                <NavLink to="contact">Nous contacter</NavLink>
            </div>
            <div>
                <NavLink to="sing-in">S'inscrire</NavLink>
                <NavLink to="login">Se connecter</NavLink>
            </div>
            </nav>
        </header>
    )
}