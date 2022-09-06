import React, { useState, useEffect } from 'react';
 import { useParams } from "react-router-dom";

// ------- COMPONENTS -------------
import AccomodationCard from '../AccomodationCard/AccomodationCard' 

// -------- IMPORT STYLE -----------------

import './AccommodationList.css';

// ----------------------------------------------------

 export default function AccommodationList() {
     const [logement, setLogement] = useState({tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}});
     let { id } = useParams(); 

    /*   la boucle  */
    /* l'affichage  des apartement*/
    
    /*   la recuperation data d'un fichier en local */
   useEffect(() => {
     fetch(` http://localhost:3001/logements`)
    .then ((response) => {
       return response.json()
    })
      .then((data) => {
        for (let i=0; i<data.length; i++){
            if (data[i].id === id){
                setLogement(data[i])
            }
        }
        setTimeout(() =>{
        }, 1500);
           console.log(data)
        })
}, [])


     return (
        <div className="home">
        <div className="body_location_page">
            <div className="slideshow_location">
              <div img={logement.pictures}></div>
            </div>

            <div className="presentation">
                <div className="location_header">
                    <div>
                        <h2 className="title_locationpage">{logement.title}</h2>
                        <p className="subtitle_locationpage">{logement.location}</p>
                    </div>

                    <div className="main-container-tag"> 

                    </div>
                </div>

                <div className="location_subheader">
                    <div name={logement.host.name} picture={logement.host.picture}>
                    </div>

                    <div className="main-container-stars">
                       <div rating = {logement.rating} key={logement.id}></div>
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

