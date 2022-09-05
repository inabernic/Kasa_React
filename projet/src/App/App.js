import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";

// VIEWS -------------------------------------------

import Home from '../pages/Home/Home'
import AccommodationList from '../components/AccommodationList/AccommodationList'
import Error from '../pages/Error/Error'



// -------------------------------------------

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Fiche_logement" element={<AccommodationList />} />
      <Route path='/*' exact={true} element={<Error />} />
    </Routes>

  );
}


