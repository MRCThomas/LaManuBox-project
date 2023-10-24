import logo from "../assets/images/logo-la-manu-box.svg"
import ScrollToAnchor from './ScrollToAnchor'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import UserStateComponent from '../components/UserStateComponent'
import { AuthContext } from '../context/AuthContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
// import { useState } from "react" 
export default function Header() {
    const authContext = useContext(AuthContext);
    return (
        <>
            <header>
            <ScrollToAnchor />
                <nav className='d-flex justify-content-center align-items-center'>
                    <ul className='d-flex justify-content-between p-0 m-0 '>
                        <div className="container_logo_link d-flex justify-content-between ">
                            <div className="nav_logo d-flex align-items-center">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="burgerMenu">
                            <FontAwesomeIcon icon={faBars} className="fa-3x" />
                            </div>
                            <div className='nav_link  d-flex align-items-center gap-4' id='menu'>
                                <li>
                                    <NavLink className="text-dark link-underline link-underline-opacity-0 nav__link " to="/">Accueil</NavLink>
                                </li>
                                <li>
                                    <NavLink className="text-dark m-0 link-underline link-underline-opacity-0 nav__link" to="#box">Nos Box</NavLink>
                                </li>
                                <li>
                                    <NavLink className="text-dark m-0 link-underline link-underline-opacity-0 nav__link" to="contact">Contact</NavLink>
                                </li>
                            </div>
                        </div>
                        {!authContext.userToken ? (
                            <>
                                <div className='nav_link  d-flex align-items-center gap-3' id='menu'>
                                    <li>
                                        <NavLink className="text-light btn btn-primary" to="sign-in">S'inscrire</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className=" btn btn-outline-primary  " to="login">Se connecter</NavLink>
                                    </li>
                                </div>
                            </>
                        ) : (
                            <li><UserStateComponent /></li>
                        )

                        }

                    </ul>
                </nav>
                {/* <div></div> */}
            </header>
        </>
    )
}