import React from 'react';
import "./activepage.scss";
import { About, Contact, Works, Resume, Playground } from "../pages";


export default function ActivePage({title, isActive, pageIndex, color, togglePage, bgcolor}) {

  const exitPage = () => {
    togglePage()
  }

  const handlePages = () => {
    switch(title){
      case 'About' : return <About title = {title} color={color} togglePage={togglePage} />;
      case 'Works' : return <Works title = {title} color={color} togglePage={togglePage}  />;
      case 'Contact' : return <Contact title = {title} color={color} togglePage={togglePage}  />;
      case 'Resume' : return <Resume title = {title} color={color} togglePage={togglePage}  />;
      case 'Playground' : return <Playground title = {title} color={color} togglePage={togglePage}  />;
    }
  }

  return (
    <div className={ isActive ? bgcolor + `-gradient activepage is-active` : `activepage is-inactive` }>
      <div className="close" onClick={ exitPage }></div>
      { handlePages() }
    </div>
  )
}
