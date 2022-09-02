import React from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
// ------- COMPONENTS -------------
import AccomodationCard from '../AccomodationCard/AccomodationCard'

// -------- IMPORT STYLE -----------------

import './AccommodationSheet.css';

// ----------------------------------------------------

export default function AccommodationSheet() {
    const [location, setLocation] = useState({tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}});

    let { id } = useParams();

    


  /*   la recuperation
    la boucle
    l'affichage  des apartement*/



    /*   useEffect(() => {
    fetch('/locations.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setLocations(data)
        })
}, []) */

useEffect(() => {
    fetch(`http://localhost:3000/logements.json`)
         .then((response) => response.json()
         .then(({ appartData }) => console.log(appartData))
         .catch((error) => console.log(error))
     )
 }, [])

    
    const [locations, setLocations] = useState([]);

    return (
        <div className="home">
        <div className="body_location_page">
            <div className="slideshow_location">
                
            </div>

            <div className="presentation">
                <div className="location_header">
                    <div>
                        <h2 className="title_locationpage">{location.title}</h2>
                        <p className="subtitle_locationpage">{location.location}</p>
                    </div>

                    <div className="main-container-tag">
                       {locations.map((location) => <AccomodationCard key={location.id} location={location}/>)} 
                         {/* ................... */}
                    </div>
                </div>

                <div className="location_subheader">
                    <div>
                       
                    </div>

                    <div className="main-container-stars">
                       
                    </div>
                </div>
            </div>

            <div className="main-container-accordion">
                <div className="accordion-container-left">
                    
                </div>
                <div className="accordion-container-right">
                   
                </div>
            </div>

        </div>
        </div>
    );
}

