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
  description: `<p>After a long months of buying a domain name or maybe a year for my portfolio. 
  I decided to finish my online portfolio.</p><p>And here's the result, it's also my first time to 
  really work on a react website as I only been following tutorials to create web apps like todo etc.</p>`,
  image: portfoliov1,
  site: 'https://www.igorot.me',
  github: 'https://github.com/baguiosfinest/foliov1'
},{
  name: 'Betsson',
  url: 'betsson',
  type: 'Website',
  tech: 'Wordpress, Html, Sass, JS, PHP, MySQL',
  description: `<p>I was a part of creating this website when I worked on an Agency. Done most of the frontend stuffs 
  here along with other devs working on the backend.</p><p>It's a different feels on what I was used to working alone in a homebased setup.</p>`,
  image: betsson,
  site: 'https://www.betssongroup.com/',
  github: ''
},{
  name: 'Makeup Mirror',
  url: 'makeupmirror',
  type: 'Website',
  tech: 'Wordpress, Html, Sass, JS, PHP, MySQL',
  description: `<p>Done most fo the frontend stuffs on this website.</p>`,
  image: makeup,
  site: 'https://www.makeupmirror.com/',
  github: ''
},{
  name: 'Kraftsam',
  url: 'kraftsam',
  type: 'Website',
  tech: 'Wordpress, Html, Sass, JS, PHP, MySQL',
  description: `<p>My first official task on the Web Agency I worked for. Coded most of the frontend works.</p>`,
  image: kraftsam,
  site: 'https://www.kraftsam.se/',
  github: ''
},{
  name: 'Nutrilett',
  url: 'nutrilett',
  type: 'Website',
  tech: 'Wordpress, Html, Sass, JS, PHP, MySQL',
  description: `<p>This was a big project where I was tasked to do some of the modules or components. 
  It's more likely an update of the old website they had.</p>`,
  image: nutrilett,
  site: 'https://www.nutrilett.se/',
  github: ''
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
