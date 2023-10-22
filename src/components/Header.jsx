import React from 'react'
import {Link, NavLink } from 'react-router-dom'

import "../assets/styles/Nav.css"
import logo from "../assets/images/logo-la-manu-box.svg"
export default function Header() {
    return (
        <header>
            <nav className='d-flex justify-content-center align-items-center'>
                <ul className='d-flex justify-content-between p-0 m-0 '>
                    <div className="container_logo_link d-flex justify-content-between ">
                        <div className="nav_logo d-flex align-items-center">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className='nav_link d-flex align-items-center gap-4'>
                            <li>
                                <NavLink className="text-secondary" to="/">Accueil</NavLink>
                            </li>
                            <li>
                                <Link className="text-secondary m-0" to="/#box">Nos Box</Link>
                            </li>
                            <li>
                                <NavLink className="text-secondary" to="contact">Contact</NavLink>
                            </li>   
                        </div>
                    </div>
                   <div className='nav_ls d-flex align-items-center gap-3'>
                        <li>
                            <NavLink className="text-secondary btn btn-primary" to="sing-in">S'inscrire</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-secondary btn btn-outline-secondary  " to="login">Se connecter</NavLink>
                        </li>
                    </div>
                    
                </ul>
            </nav>
            
        </header>
    )
}