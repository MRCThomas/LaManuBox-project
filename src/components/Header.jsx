import React from 'react'
import {NavLink } from 'react-router-dom'

// import "../assets/styles/Nav.css"
import logo from "../assets/images/logo-la-manu-box.svg"
import ScrollToAnchor from './ScrollToAnchor'


export default function Header() {
    return (
        <header>
            <ScrollToAnchor/>
            <nav className='d-flex justify-content-center align-items-center'>
                <ul className='d-flex justify-content-between p-0 m-0 '>
                    <div className="container_logo_link d-flex justify-content-between ">
                        <div className="nav_logo d-flex align-items-center">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className='nav_link  d-flex align-items-center gap-4'id='menu'>
                            <li>
                                <NavLink className="text-dark link-underline link-underline-opacity-0" to="/">Accueil</NavLink>
                            </li>
                            <li>
                                <NavLink className="text-dark m-0 link-underline link-underline-opacity-0" to="/#box">Nos Box</NavLink>
                            </li>
                            <li>
                                <NavLink className="text-dark link-underline link-underline-opacity-0" to="contact">Contact</NavLink>
                            </li>   
                        </div>
                    </div>
                   <div className='nav_link  d-flex align-items-center gap-3'id='menu'>
                        <li>
                            <NavLink className="text-light btn btn-primary" to="sing-in">S'inscrire</NavLink>
                        </li>
                        <li>
                            <NavLink className=" btn btn-outline-primary  " to="login">Se connecter</NavLink>
                        </li>
                    </div>
                      
                </ul>
            </nav>
            <div></div>
        </header>
    )
}