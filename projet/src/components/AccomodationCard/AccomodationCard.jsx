import React from 'react';
import './AccomodationCard.css';
import {
    BrowserRouter as Link,
} from "react-router-dom";


// -------------------------------------------

export default function AccomodationCard(props) {
    return (
        <>
            <div>
                <Link className="linklocation" to={"/locations/"+props.location.id}>
                    <div className="location-card" style={{backgroundImage:`url(${props.location.pictures[0]})`}}>
                        <h5 className="location-title">{props.location.title}</h5>
                        <div className="location-bgd"></div>
                    </div>
                 </Link>
            </div>
        </> 
    )
}


 