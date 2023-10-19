import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet, useLocation } from 'react-router-dom'

export default function Template() {
    const location = useLocation();
    const [id, setId] = useState('');
    useEffect(() => {
        switch (location.pathname) {
            case '/login':
                setId('login');
                break;
            case "/":
                setId("home");
                break;
            default:
                setId('error')
                break
        }
    }, [location])
    return (
        <div id={id}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>

    )
}