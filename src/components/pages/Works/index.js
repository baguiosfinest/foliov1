import React, { useState } from 'react';
import Title from "../../Title";
import WorkActive from "../../WorkActive";
import './works.scss';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function Works({title, isActive, pageIndex, color, togglePage}) {
  let classes = "section section-works";
  let activeClass = "section section-works section-works-active";
  const [klass, setKlass] = useState(classes);
  const [activeWork, setActiveWork] = useState(false);

  const handleClass = () => {
    setKlass(activeClass);
  }

  const handleButtonBack = () => {
    setKlass(classes);
  }

  return (
      <section className={ klass }>
        { <span onClick={ handleButtonBack } className="button-back">Back</span> }
        <div className="section-works-main">
          <Title title = { title } color = { color } />
          <div className="section-works-navigation">
            <ul>
              <li><Link onClick={ handleClass } to="/betsson">Betsson</Link></li>
              <li><Link onClick={ handleClass } to="/makeupmirror">Makeup Mirror</Link></li>
              <li><Link onClick={ handleClass } to="/kraftsam">Kraftsam</Link></li>
              <li><Link onClick={ handleClass } to="/nutrilett">Nutrilett</Link></li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route path="/betsson">
            <WorkActive title={`Betsson`} />
          </Route>
          <Route path="/makeupmirror">
            <WorkActive title={`Makeup Mirror`}  />
          </Route>
          <Route path="/kraftsam">
            <WorkActive title={`Kraftsam`}  />
          </Route>
          <Route path="/nutrilett">
            <WorkActive title={`Nutrilett`}  />
          </Route>
        </Switch>
      
    </section> 
  )
}
