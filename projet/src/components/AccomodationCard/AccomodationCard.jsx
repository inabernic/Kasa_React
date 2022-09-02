import React from 'react';
import './AccomodationCard.css';
import { Link} from "react-router-dom";
import {useState} from 'react'
//import styled from 'styled-components;'

// -------------------------------------------
/* const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
` */


export default function AccomodationCard(props) {
    const[label]=useState(1)
    return (
        
            <div>
                <Link className="linklocation" to={"/locations/"+props.location.id}>
                {/* <StyledLink to="/">Test</StyledLink> */}
                    <div className="location-card" style={{backgroundImage:`url(${props.location.pictures[0]})`}}>
                        <h5 className="location-title">{props.location.title}</h5>
                        {/* <CardLabel label={label}/> */}
                        <div className="location-bgd"></div>
                    </div>
                </Link>
            </div>
    )
}
