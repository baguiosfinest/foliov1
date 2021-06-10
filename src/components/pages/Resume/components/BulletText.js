import React from 'react';

export default function BulletText({ last, year ,text }) {
  return (
    <div className={ last ? 'bullettext last' : 'bullettext' }>
      <div className="col1">{ year }</div>
      <div className="col2" dangerouslySetInnerHTML={{__html: text}}></div>
    </div>
  )
}
