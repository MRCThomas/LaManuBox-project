import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import UserStateComponent from '../components/UserStateComponent'
import { AuthContext } from '../context/AuthContext';

export default function Header() {
    const authContext = useContext(AuthContext);
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <a href="id-de-la-section-boxes">Nos boxes</a>
                    </li>
                    {!authContext.userToken ? (
                        <>
                            <li>
                                <NavLink to="login">Se connecter</NavLink>
                            </li>
                            <li>
                                <NavLink to="sign-in">S'inscrire</NavLink>
                            </li>
                        </>
                    ) : (
                        <li><UserStateComponent /></li>
                    )

                    }

                </ul>
            </nav>
        </header>
    )
}