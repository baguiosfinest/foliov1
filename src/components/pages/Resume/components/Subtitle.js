import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBriefcase, faBookOpen, faTools } from "@fortawesome/free-solid-svg-icons";

library.add(faBriefcase, faBookOpen, faTools);

export default function Subtitle({ title, icon }) {

  let titleStyle = {
    textTransform: 'uppercase',
    fontSize: '2rem',
    fontWeight: 300,
    borderBottom: '2px solid #000',
    letterSpacing: '2px',
  }

  return (
    <h3 className={ icon ? 'subtitle has-icon' : 'subtitle' } style={ titleStyle }>
      { icon ? <span className="ic"><FontAwesomeIcon icon={ icon } /></span> : '' }
      { title }
    </h3>
  )
}
