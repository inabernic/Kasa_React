import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";

// VIEWS -------------------------------------------

import Home from '../pages/Home/Home';
import AccomodationPage from "../pages/AccommodationPage/AccommodationPage";
import AboutPage from "../pages/AboutPage/AboutPage"
import Error from '../pages/Error/Error'


// -------------------------------------------

export default function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/logements/:id" element={<AccomodationPage />} />
      <Route exact path="/apropos" element={<AboutPage />} />
      <Route path='/*' exact={true} element={<Error />} />
    </Routes>
  );
}


