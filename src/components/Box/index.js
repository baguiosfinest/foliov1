import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import "./box.scss";

export default function PageBox({ title, color, classname, num, handleBoxClick, randex }) {
  const [active, setActive] = useState(false);

  const onHandleClick = () => {
    if(handleBoxClick) {
      handleBoxClick({ num, title, color});
      setActive(true);
    }
  }

  const handleClass = () => {
    let containerClass = 'pagebox ';
    if(classname) {
      containerClass += classname + ' ';
    } else {
      containerClass += `pg-${num} `;
    }
    if(handleBoxClick) {
      containerClass += 'has-content ';
    }

    if(color[0] == 'lightgreen' || color[0] == 'lime' || color[0] == 'yellow' || color[0] == 'amber' || color[0] == 'orange') {
      containerClass += 'text-dark';
    }

    return containerClass;
  }

  const handleMarkUp = () => {
    return (
      <div className={ handleClass() } style={{ backgroundColor: color[1][500], animationDelay: (randex * .100) + 's' }}>
        {title}
      </div>);
  }

  return (
    <div onClick={ onHandleClick } className={`pagebox-wrapper pw-${num}`}>
      { handleMarkUp() }
    </div>
  );
}
