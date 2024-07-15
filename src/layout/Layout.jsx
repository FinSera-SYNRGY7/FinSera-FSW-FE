import React from 'react'
import Header from './Header'
import { Button } from 'react-bootstrap'
import Back from './Back'
import SumberRekening from '../components/SumberRekening'
import Footer from './Footer'
import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div className="App">
            <Header />
            <main>
                <Outlet />
            </main>
            <div className="card footer-card" >
                <Footer />
            </div>
        </div>
    )
}
