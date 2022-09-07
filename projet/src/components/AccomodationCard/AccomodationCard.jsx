import React from 'react';
import { useState } from 'react'
import { Link} from "react-router-dom";
import{ Component} from 'react'
import PropTypes from 'prop-types'
import './AccomodationCard.css';

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

class AccomodationCard extends Component{
    constructor (props) {
        super (props)
        this.state = {
            post:{}
        }
    }
    render(){
        const {id, label, picture, title} = this.props
        return(  
            <div>
                <div> <h1>Card d'un appartement1 : {id}</h1></div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
                    <span>{label}</span>
                    <img src={picture} alt="foto" height={80} width={80} />
                    <span>{title}</span>
                </div>
            </div>
        )
    }
}

export default AccomodationCard

{/* 
 const {id} = this.props.match.params

 export default function AccomodationCard(label, picture, title, rating, location) {
    return (
            <div>
                   <div> <h1>Card d'un appart : {id}</h1></div>
                 <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{label}</span>
            <img src={picture} alt="freelance" height={80} width={80} />
            <span>{title}</span>
        </div>  */}

                {/* <div> <h1>Card d'un appart : {id}</h1></div>
                <Link className="linklocation" to={"/locations/"+props.location.id}>
                    <div className="location-card" style={{backgroundImage:`url(${props.location.pictures[0]})`}}>
                        <h5 className="location-title">{props.location.title}</h5>
                        <div className="location-bgd"></div>
                    </div>
                </Link> */}



{/*                 
            </div>
    )
} 
 */}