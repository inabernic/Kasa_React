import{ Component} from 'react'
import { Link} from "react-router-dom";

// ------- COMPONENTS -------------
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer'

class AccomodationPage extends Component{
  
    constructor (props) {
        super (props)
        this.state = {
            post:{}
        }
    }
    render(){
        const {id, title} = this.props
        return( 
            <div>
            <Nav />
            <div className="locationPage-card"> 
            <div className="navli">
            {/* <Link className="page" to="/logements/{id}">La page de l'appart</Link> */}
          </div>

          
         {/*    recuperation depuis l'url
            <h1>La page du logements avec l'id: {id}</h1>
            <h5 className="location-title">{title}</h5> */}
            </div>
             <Footer />
             </div>
        )
    }
}

export default AccomodationPage





