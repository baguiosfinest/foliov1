import React from 'react';
import './workactive.scss';
import Title from './../Title';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

library.add(fab,faGlobe);

export default function WorkActive({ data, color }) {
  return (
    <div className="work-active">
      <Title title = { data.name } color={ color } position={`center`} />
      <div className="work-content">
        <div className="work-content-left">
          <h3>Description: </h3>
          <div className="desc" dangerouslySetInnerHTML={{__html: data.description}}></div>
          <h3>Tech Used:</h3>
          <p>{ data.tech }</p>
          <p><a className="button" href={data.site}><FontAwesomeIcon icon={ `globe` } /> Site</a>
            { data.github ? <a className="button" href={'/'}><FontAwesomeIcon icon={ ["fab", 'github'] } /> Source</a> : '' }
          </p>
        </div>
        <div className="work-content-right">
          <img src={data.image} alt={data.name} />
        </div>
      </div>
    </div>
  )
}
