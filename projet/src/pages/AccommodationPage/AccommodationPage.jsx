//import{ Component} from 'react'
//import { Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
//import axios from 'axios';
//import AccomodationCard from '../../components/AccomodationCard/AccomodationCard';

// ------- COMPONENTS -------------
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer'
import AccordeonEffect from './components/AccordeonEffect/AccordeonEffect';
import Avatar from './components/Avatar/Avatar';
import Tag from './components/Tag/Tag';
import Slideshow from './components/Slideshow/Slideshow';
import Stars from './components/Stars/Stars';

// ------- STYLES -------------
import './AccomodationPage.css';


export default function AccomodationPage() {
     const [logement, setLogement] = useState({tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}});

    let { id } = useParams();

    useEffect (function (){
        fetch(' http://localhost:3001/logements/' + id)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            setLogement (data);
           
        }
        )
    }, [id]);

    return (
        <div className='container_page'>
               <Nav />
               <div className="accommodation_page">
            <div className="slideshow_location">
                <Slideshow img={logement.pictures}  alt="description"/>
            </div>

            <div className="presentation">
                <div className="location_header">
                    <div>
                        <h2 className="title_locationpage">{logement.title}</h2> 
                        <p className="subtitle_locationpage">{logement.location}</p>
                    </div>

                    <div className="main-container-tag">
                        {logement.tags.map((tag) => <Tag content={tag} key={tag}/>)}
                    </div>
                </div>

                <div className="location_subheader">
                    <div className="host">
                        <Avatar name={logement.host.name} picture={logement.host.picture}/>
                    </div>

                    <div className="main-container-stars">
                        <Stars rating={logement.rating} key={logement.id}/>
                    </div>
                </div>
            </div>

            <div className="main-container-accordion">
                <div className="accordion-container-left">
                    <AccordeonEffect
                        title="Description"
                        content={logement.description}
                    />
                </div>
                <div className="accordion-container-right">
                    <AccordeonEffect
                        title="Equipement"
                        content={
                            <ul className="list">
                                {logement.equipments.map((equipment) => <li key={equipment}>{equipment}</li>)}
                            </ul>
                        }
                    />

                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}
