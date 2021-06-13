import React, { useState } from 'react';
import Title from "../../Title";
import WorkActive from "../../WorkActive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { betsson, kraftsam, makeup, nutrilett, portfoliov1 } from '../../../images';


import './works.scss';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";

library.add(faChevronUp);

let works = [{
  name: 'Portfolio V1',
  url: 'portfoliov1',
  type: 'PWA',
  tech: 'ReactJS, Sass, HTML, CSS, JS',
  description: '',
  image: portfoliov1,
  site: 'https://www.igorot.me'
},{
  name: 'Betsson',
  url: 'betsson',
  type: 'Website',
  tech: 'Wordpress, Html, Sass, JS, PHP, MySQL',
  description: '',
  image: betsson,
  site: 'https://www.betssongroup.com/'
},{
  name: 'Makeup Mirror',
  url: 'makeupmirror',
  type: 'Website',
  tech: 'Wordpress, Html, Sass, JS, PHP, MySQL',
  description: '',
  image: makeup,
  site: 'https://www.makeupmirror.com/'
},{
  name: 'Kraftsam',
  url: 'kraftsam',
  type: 'Website',
  tech: 'Wordpress, Html, Sass, JS, PHP, MySQL',
  description: '',
  image: kraftsam,
  site: 'https://www.kraftsam.se/'
},{
  name: 'Nutrilett',
  url: 'nutrilett',
  type: 'Website',
  tech: 'Wordpress, Html, Sass, JS, PHP, MySQL',
  description: '',
  image: nutrilett,
  site: 'https://www.nutrilett.se/'
},];

export default function Works({title, isActive, pageIndex, color, togglePage}) {
  let classes = "section section-works";
  let activeClass = "section section-works section-works-active";
  const [klass, setKlass] = useState(classes);
  // const [activeWork, setActiveWork] = useState(false);

  const handleClass = () => {
    setKlass(activeClass);
  }

  const handleButtonBack = () => {
    setKlass(classes);
  }

  return (
      <section className={ klass }>
        { <span onClick={ handleButtonBack } className="button-back">
          <svg aria-hidden="true" class="progress" width="70" height="70" viewBox="0 0 70 70">
            <path class="progress__circle" d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"></path>
            <path class="progress__path" d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z" pathLength="1"></path>
          </svg>
          <FontAwesomeIcon className="arrow-up" icon={ `chevron-up` } />
        </span> }
        <div className="section-works-main">
          <Title title = { title } color = { color } />
          <div className="section-works-navigation">
            <ul>
              {
                works.map((work, i) => {
                  return <li key={i}><Link onClick={ handleClass } to={`/` + work.url }>{ work.name }</Link></li>
                })
              }
            </ul>
          </div>
        </div>
        <Switch>
          { works.map((work) => {
            return (<Route path={ `/` + work.url}>
                    <WorkActive data={work} color={ color } />
                  </Route>)
            })
          }
        </Switch>
      
    </section> 
  )
}
