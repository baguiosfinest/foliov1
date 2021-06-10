import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faUser, faMapMarkerAlt, faPhoneAlt, faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faUser, faMapMarkerAlt, faPhoneAlt, faGlobe, faEnvelope);

export default function IconText({ icon, text, title, fabic }) {
  return (
    <div className="icontext">
      { icon ? <span className="ic"><FontAwesomeIcon icon={ fabic ? ["fab", icon] : icon } /></span> : '' }
      <div className="text">
        <h4>{ title }</h4>
        <p dangerouslySetInnerHTML={{__html: text}}></p>
      </div>
    </div>
  )
}
