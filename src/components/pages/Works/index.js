import React from 'react';
import Title from "../../Title";
import './works.scss';

export default function Works({title, isActive, pageIndex, color, togglePage}) {
  return (
    <section className="section section-works">
      <Title title = { title } color = { color } />
      <div className="section-works-navigation">
        <ul>
          <li><a href="/">Betsson</a></li>
          <li><a href="/">Makeup Mirror</a></li>
          <li><a href="/">Kraftsam</a></li>
          <li><a href="/">Nutrilett</a></li>
          <li><a href="/">Ucan Recycle</a></li>
        </ul>
      </div>
    </section>   
  )
}
