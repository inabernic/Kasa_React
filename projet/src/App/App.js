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
import About from '../views/About/About'
import LocationPage from '../views/LocationPage/LocationPage'
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
                        <Link className="nav" to="/a_propos">À propos</Link>
                    </div>
                </div>
            </div>

            <Routes>
                <Route exact path="/a_propos">
                    <About />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/locations/:id">
                    <LocationPage />
                </Route>
                <Route render={() => <Error />} />
            </Routes>
        </Router>
    );
}




/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */