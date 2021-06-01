import React from 'react';
import Title from "../../Title";
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import "./about.scss";

export default function About({title, isActive, pageIndex, color, togglePage}) {

  const exitPage = () => {
    togglePage()
  }

  const introText = [
    `I'm Sonny!`,
    `A Creative Frontend Developer`,
  ];

  return (
    <section className="section section-about">

      <Title title = { title } color = { color }/>

      <h4 className="hello">helloworld();</h4>
      <h2 className="name"><Typed strings={ introText } backSpeed={ 60 } typeSpeed={ 120 } loop /></h2>
      <p className="description">
        <strong>Wordpress || Frontend Web Developer</strong><br />
        From the Philippines exploring the land down under.<br />
        Currently based in Brisbane, QLD.
      </p>
    </section>    
  )
}
