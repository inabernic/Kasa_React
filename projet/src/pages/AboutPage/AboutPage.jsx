import React from 'react'

// STYLE
import './AboutPage.css'

import Accordion from '../AboutPage/components/Accordion'

// ------- COMPONENTS -------------
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

export default function About() {
  return (
    <div className="container_about-page">
      <Nav />
      <div className="body_about_page">
        <div className="background_header_image">
          <div className="header_img">
            <img src="../about_header_image.png" alt="bgdimg" />
          </div>
        </div>

        <div className="container_about_page">
          <div className="accordion-container">
            <Accordion
              title="Fiabilité"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper..."
            />
          </div>

          <div className="accordion-container">
            <Accordion
              title="Respect"
              content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper..."
            />
          </div>

          <div className="accordion-container">
            <Accordion
              title="Service"
              content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper..."
            />
          </div>

          <div className="accordion-container">
            <Accordion
              title="Sécurité"
              content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper..."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
