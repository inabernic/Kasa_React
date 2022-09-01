import React from 'react'
import {useState, useEffect} from 'react';


// ------- COMPONENTS -------------
import Nav from '../../components/Nav/Nav';
import AccomomdationSheet from '../../components/AccommodationSheet/AccommodationSheet';
import AccomodationCard from '../../components/AccomodationCard/AccomodationCard';
import Footer from '../../components/Footer/Footer'
// -------- IMPORT STYLE -----------------
import './Home.css'
import AccommodationSheet from '../../components/AccommodationSheet/AccommodationSheet';

export default function Home() {
  const [locations, setLocations] = useState([]);

/*   useEffect(() => {
    fetch('/locations.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setLocations(data)
        })
}, []) */


return (
    <div className="home">
        <Nav/>

    <div className="body-home">
        <div className="background_title">
            <div className="title_img">
                <img src="../homebackgroundimg.png" alt="bgdimg"/>
            </div>
            <h2 className="title_home"> Chez vous, partout et ailleurs</h2>
          {/*   <div className="bgd">Une publication de 1994 du magazine « Before & After » décrit l'expression « Lorem ipsum ... » comme une version latine peu fidèle d'un passage d'un traité de théorie éthique, de Finibus Bonorum et Malorum, écrit par Cicéron en 45 avant Jésus-Christ. Le passage « Lorem ipsum ... » est tiré du texte « Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ... » qui peut se traduire par « Personne n'aime la douleur en elle-même, ne la recherche et ne la souhaite, tout simplement parce qu'il s'agit de la douleur... ».</div> */}
        </div>


        <div className="background_container">
            <div className="location-card-info">
                <AccommodationSheet/>
                {locations.map((location) => <AccomodationCard key={location.id} location={location}/>)}
            </div>
        </div>
    </div>

    <Footer/>
    </div>
);
}