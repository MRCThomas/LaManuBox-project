import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import HeaderLogin from './components/HeaderLogin'
import HeaderCreateAccount from './components/HeaderCreateAccount'
import Footer from './components/Footer'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { generateToken } from './helper/authHelper'
import { AuthContext } from './context/AuthContext'

export default function Template() {
    const location = useLocation();
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const [userToken, setUserToken] = useState(Cookies.get('userToken') || null);

    const handleLogin = () => {
        // Générez un token pour l'état "connecté"
        const token = generateToken();
        setUserToken(token);
    };

    useEffect(() => {
        // Mise à jour du cookie lorsque l'état de l'utilisateur change
        if (userToken) {
            Cookies.set('userToken', userToken, { expires: 365 }); // le cookie expire après 1 an
            console.log(userToken);
        } else {
            Cookies.remove('userToken');
            console.log(userToken);
        }
    }, [userToken]);
    
    // Fonction pour déconnecter l'utilisateur
    const handleLogout = () => {
        setUserToken(null);
    };

    useEffect(() => {
        // const authCookie = Cookies.get('userToken');
        
        if(!userToken){
            navigate('/login');
        }
        console.log(userToken);
    },[userToken])

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setId("home");
                break;
            case '/login':
                setId('login');
                break;
            case '/sign-in':
                setId('sign-in');
                break;
            default:
                setId('error')
                break
        }
    }, [location])
    return (
        <AuthContext.Provider value={{handleLogin: handleLogin, handleLogout: handleLogout, userToken: userToken}}>
            <div id={id}>
                {id === 'login' ? <HeaderLogin /> :
                    id === 'sign-in' ? <HeaderCreateAccount /> :
                        <Header />
                }
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </AuthContext.Provider>
    )
}