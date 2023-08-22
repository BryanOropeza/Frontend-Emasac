import React from 'react';
import "../Vista/assets/css/style.css";

export const Navbar = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
      <div className="container d-flex align-items-center justify-content-between">

        <div className="logo">
          <h1><a href="#hero"><img src="assets/img/logo.png" alt="" /></a></h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services1">Services</a></li>
            <li><a className="nav-link scrollto" href="#portfolio">Gallery</a></li>
            <li><a className="nav-link scrollto" href="#team">Team</a></li>

            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a className="bg-danger" href="/login">Login</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};


