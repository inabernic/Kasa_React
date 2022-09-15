import React from 'react';
import './AboutPage.css';

// ------- COMPONENTS -------------
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer'

export default function About () {
    return (
        <div className='container_page_about'>
            <Nav />
        <div className="error">
            <h1>L'mage</h1>
            <p>Les tags</p>
        </div>
        <Footer/>
        </div>
    );
}