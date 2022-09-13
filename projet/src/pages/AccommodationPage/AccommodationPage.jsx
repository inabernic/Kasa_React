import{ Component} from 'react'
import { Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import fetchData from '../../components/AccommodationList/AccommodationList';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AccomodationCard from '../../components/AccomodationCard/AccomodationCard';

// ------- COMPONENTS -------------
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer'

// ------- STYLES -------------
import './AccomodationPage.css';

 let AccomodationPage = () =>{
    let {id} = useParams();
    console.log(id);

    const[data, setData] = useState([]);
  
/* fetch (` http://localhost:3001/logements/` + id)
.then (res => {
    console.log(res);

    if(res.ok){
        res.json();
        console.log(res.json())
    } else{
        console.log("ERR")
    }
}) */


fetch (` http://localhost:3001/logements/` + id)
.then(res => res.json())
.then (data => console.log(data))


        return( 
            <div>
            <Nav />
            <div className="locationPage-card"> 
            <h5 className="page">La page de l'appart avec id: {id}</h5> 
          
            <div>
      {data.map(id => {
        return <h2>{id}</h2>;
      })}
    </div>

            </div>
             <Footer />
             </div>
        )   
        }

export default AccomodationPage





