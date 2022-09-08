import React from 'react';
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

// ------- COMPONENTS -------------
import Nav from '../../components/Nav/Nav';
import AccommodationList from '../../components/AccommodationList/AccommodationList';
import Footer from '../../components/Footer/Footer'
// -------- IMPORT STYLE -----------------
import './Home.css'

export default function Home() {

return (

<div className="home">
    <Nav />

    <div className="body-home">
        <div className="img_title">
            <div className="back_img">
                <img src="../homebackgroundimg.png" alt="bgdimg" />
            </div>
            <div className="back_img back_title">
                <h2 className="title_home"> Chez vous, partout et ailleurs</h2>
            </div>
        </div>

        <div className="background_container">
        <AccommodationList  />
        </div>
    </div>
    <Footer />
</div>
);
}