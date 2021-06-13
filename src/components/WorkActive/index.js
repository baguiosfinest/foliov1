import React from 'react';
import './workactive.scss';
import Title from './../Title';

export default function WorkActive({ data, color }) {
  return (
    <div className="work-active">
      <Title title = { data.name } color={ color } position={`center`} />
      <div className="work-content">
        <div className="work-content-left">
          <h3>Description: </h3>
          <p>{ data.description }</p>
          <h3>Tech Used:</h3>
          <p>{ data.tech }</p>
        </div>
        <div className="work-content-right">
          <img src={data.image} alt={data.name} />
        </div>
      </div>
    </div>
  )
}
