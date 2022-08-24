import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// VIEWS -------------------------------------------

import Home from '../pages/Home/Home'
import Accommodation from '../pages/AccommodationSheet/AccommodationSheet'
import Error from '../components/Error/Error'

// -------------------------------------------

export default function App() {
  return (
    <Router>
      <div className="navbar">
        <div className="logo">
          <Link className="nav" to="/">
            <img src="../LOGO.svg" alt="logo application" />
          </Link>
        </div>
        <div className="list-menu">
          <div className="navli">
            <Link className="nav" to="/">Accueil</Link>
          </div>
          <div className="navli">
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/a_propos" exact component={Accommodation} />
        <Route path="/" exact component={Home} />
        <Route render={() => <Error />} />
      </Routes>
    </Router>
  );
}


