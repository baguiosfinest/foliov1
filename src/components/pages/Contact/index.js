import React from 'react';
import Particles from 'react-particles-js';
import Title from '../../Title';
import './contact.scss';
import { stlogo } from '../../../images';

const Contact = ({title, isActive, pageIndex, color, togglePage}) => {
  // const exitPage = () => {
  //   togglePage()
  // }

  return (
    <section className="section section-contact">
      <div className="content">
        <Title title = { title } color = { color } />
        <p>You can contact me via my email:</p>
        <p><a href="mailto:ynnossence@gmail.com">ynnossence@gmail.com</a></p>
      </div>
        <Particles
            params={{
              "particles": {
                  "number": {
                      "value": 100
                  },
                  "size": {
                      "value": 3
                  },
                  "opacity": {
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.05
                    }
                }
              },
              "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "repulse"
                      }
                  }
              }
          }} />
    </section>
  )
}

export default Contact;
