import React from 'react';

export default function SkillItem({ skill }) {
  return (
    <div className="skill-item">
      <div className="name">{ skill.name }</div>
      <div className="bar"><span style={{ maxWidth: skill.percent + `%`}}></span></div>
    </div>
  )
}
