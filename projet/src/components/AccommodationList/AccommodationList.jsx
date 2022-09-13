import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";

// ------- COMPONENTS -------------
import AccomodationCard from '../AccomodationCard/AccomodationCard' 

// -------- IMPORT STYLE -----------------

import './AccommodationList.css';

// ----------------------------------------------------

function AccommodationList(){
    const[data, setData] = useState([]);

     /*   la recuperation data d'un fichier en local */

    //similaire à composantDidMount et componentDidUpdate
    useEffect(() =>{
        const fetchData = async () =>{
            const result = await axios (` http://localhost:3001/logements`,);
            setData (result.data);
            console.log("updated");
        };
        fetchData();
        console.log("mounted");
        setTimeout(() =>{
        }, 500);
    }, [])



    /*   la boucle  */
    /* l'affichage  des apartement*/

    return (
        <div className="container-list">          
            <ul>       
                {data.map(logement =>(
                    <AccomodationCard
                        key ={logement.id}
                        item ={logement}
                    />
                    
                ))
                }      
            </ul>
        </div>
     )
}

export default  AccommodationList;