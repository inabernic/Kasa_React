import React from "react";
import './Error.css';
import {Link} from "react-router-dom";
// -------------------------------

export default function Error () {
    return (
        <div className='container_page'>
        <div className="error">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="backhome" to="/">Retourner sur la page d'accueil</Link>
        </div>
        </div>
    );
}