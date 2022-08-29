import React from "react";
import './App.css';
import {
  BrowserRouter as Routes, Route
} from "react-router-dom";

// VIEWS -------------------------------------------

import Home from '../pages/Home/Home'
import AccommodationSheet from '../pages/AccommodationSheet/AccommodationSheet'
import Error from '../pages/Error/Error'



// -------------------------------------------

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Fiche_logement" element={<AccommodationSheet />} />
      <Route render={() => <Error />} />
    </Routes>

  );
}


