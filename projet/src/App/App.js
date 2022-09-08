import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";

// VIEWS -------------------------------------------

import Home from '../pages/Home/Home';
//import AccomodationCard from "../components/AccomodationCard/AccomodationCard";
import AccomodationPage from "../pages/AccommodationPage/AccommodationPage";
import Error from '../pages/Error/Error'



// -------------------------------------------

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/*  <Route exact path="/logements/:id" render={(props) => <AccomodationCard {...props} />} /> */}
      {/* <Route exact path="/logements/:id" render={(props) => <AccomodationPage {...props} />} /> */}
      <Route exact path="/logements/:id" element={<AccomodationPage />} />
      <Route path='/*' exact={true} element={<Error />} />
    </Routes>
  );
}


