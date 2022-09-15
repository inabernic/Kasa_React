import React from "react";
import './Error.css';
import {Link} from "react-router-dom";

// ------- COMPONENTS -------------
import Nav from '../../components/Nav/Nav';

// -------------------------------

export default function Error () {
    return (
        <div className='container_page'>
        <Nav/>
        <div className="error">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="backhome" to="/">Retourner sur la page d'accueil</Link>
        </div>
        </div>
    );
}