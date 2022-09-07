import React, {FunctionComponent, useState, useEffect } from 'react';
 import { useParams } from "react-router-dom";

// ------- COMPONENTS -------------
import AccomodationCard from '../AccomodationCard/AccomodationCard' 

// -------- IMPORT STYLE -----------------

import './AccommodationList.css';

// ----------------------------------------------------

const AccommodationList: FunctionComponent = () => {
     const [logement, setLogement] = useState({tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}});
     let { id } = useParams(); 

const AppartProfile = [
    {
        name: 'Ina',
        jobTitle: 'bucsuie',
       // picture: DefaultPicture,
    },
    {
        name: 'Dima',
        jobTitle: 'fumega',
       // picture: DefaultPicture,
    }
]

    /*   la recuperation data d'un fichier en local */
   useEffect(() => {
     fetch(` http://localhost:3001/logements`)
    .then ((response) => {
       return response.json()
    })
      .then((data) => {
        //this.setState({post:{data}})
        for (let i=0; i<data.length; i++){
            if (data[i].id === id){
                setLogement(data[i])
            }
        }
        setTimeout(() =>{
        }, 1500);
           console.log(data)
        })
}, []);


    /*   la boucle  */
    /* l'affichage  des apartement*/

     return (
        <div className="container-list">
            <h1>La liste des appartement: 👩</h1>
            <p>Il y a {data.lenght} appa dans la liste</p>
            {AppartProfile.map((profile, index) => (
                <AccomodationCard
                    key={`${profile.name}-${id}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
        </div>
     )
}

export default  AccommodationList;