import React, { useState, useEffect } from 'react';
 import { useParams } from "react-router-dom";
import { useFetch } from '../../utils/hooks'
import { SafeAreaView, FlatList, StyleSheet} from 'react'; 

// ------- COMPONENTS -------------
import AccomodationCard from '../AccomodationCard/AccomodationCard' 

// -------- IMPORT STYLE -----------------

import './AccommodationList.css';

// ----------------------------------------------------


 export default function AccommodationList() {
     const [logement, setLocation, error, logements] = useState({tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}});
   let { id } = useParams(); 


     /*   la recuperation data d'un fichier en local */
 fetch(` http://localhost:3001/logements`)
 .then ((response) => {
    response = response.json()
    response.then((result) => {
        console.log(result)
     })
},  []) 


    /*   la boucle  */
    /* l'affichage  des apartement*/


     return (
        <div className="home">
        <div className="body_location_page">
            <div className="slideshow_location">
                
            </div>

            <div className="presentation">
                <div className="location_header">
                    <div>
                        <h2 className="title_locationpage">{logement.title}</h2>
                        <p className="subtitle_locationpage">{logement.location}</p>
                    </div>

                    <div className="main-container-tag"> 
                      {/* {logements.map((location) => <AccomodationCard key={logement.id} location={location}/>)}  */}
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

