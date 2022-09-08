import React from 'react';
import { Link} from "react-router-dom";
import{ Component} from 'react'
import './AccomodationCard.css';

// ------- COMPONENTS -------------
//import AccomodationPage from '../AccomodationCard/AccomodationPage' 

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
        console.log(props)
        this.state = {
            post:{}
        }
    }
    render(){
        const {item} = this.props
        return( 
            <div className="location-card"> 
            <Link className="linklocation"  to={"/logements/" + item.id } >
    
            {/* <div className="location-card" style={{backgroundImage:`url(${this.props.location.pictures[0]})`}}> */}
                    <div style={{ display: 'flex', flexDirection: 'column', padding: 1 }}>
                        {/* <span>{item.description}</span> */}
                        <img src={item.cover} alt="foto" />
                        <h5 className="location-title">{item.title}</h5>
                    </div>   
            </Link>
            </div>
        )
    }
}

export default AccomodationCard




