import React from 'react';
import { Link} from "react-router-dom";

// ------- COMPONENTS -------------
import{ Component} from 'react'

// ------- STYLES -------------
import './AccomodationCard.css';


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




