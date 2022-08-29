import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

// -------------------------------------------

export default function Nav() {
    return (
        <div className="navbar">
        <div className="logo">
          <Link className="nav" to="/">
            <img src="../LOGO.svg" alt="logo application"/>
          </Link>
        </div>
        <div className="list-menu">
          <div className="navli">
            <Link className="nav" to="/">Accueil</Link>
          </div>
          <div className="navli">
            <Link className="nav" to="/a_propos">À propos</Link>
          </div>    
        </div>
      </div>
    )
}