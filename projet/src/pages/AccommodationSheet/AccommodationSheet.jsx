import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

// ------- COMPONENTS -------------


// -------- IMPORT STYLE -----------------

import './AccomodationSheet.css';

// ----------------------------------------------------

export default function AccomodationSheet() {
    const [location, setLocation] = useState({tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}});

    let { id } = useParams();

    useEffect (function (){
        fetch('/locations.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            for (let i=0; i<data.length; i++){
                if (data[i].id == id){
                    setLocation(data[i])
                }
            }
        })
    },[]);


    return (
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
                        {location.tags.map((tag) => <Tag content={tag} key={tag}/>)}
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
    );
}

