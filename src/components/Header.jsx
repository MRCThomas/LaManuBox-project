import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="login">Se connecter</NavLink>
                    </li>
                    <li>
                        <NavLink to="sing-in">S'inscrire</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}