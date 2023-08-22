import React from "react";
import { Link } from "react-router-dom";

import "../Vista/assets/css/style.css";


//utilizamos el prop userId para tener el id del usuario
export const NavbarInnerPage = ({ userId }) => {


    return (
        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><Link to={`/innerPage?userId=${userId}`} className="nav-link scrollto active" tabIndex={0}><img src="assets/img/logo.png" alt="" /></Link></h1>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        {/*Añadimos el userId a la ruta deseada */}
                        <li><Link to={`/cotizacion?userId=${userId}`} className="nav-link scrollto active" tabIndex={0}>Cotizar Pedido</Link></li>
                        <li><Link to={`/tracking?userId=${userId}`} className="nav-link scrollto active" tabIndex={0}>Tracking</Link></li>
                        <li><a className="bg-danger" href="/">Log Out</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
};