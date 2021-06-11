import React from 'react';
import { SkillItem } from "./index";

export default function SkillsBar({ skills }) {
  return (
    <div className="skillsbar">
      <p>Here are the techs I have used, percentage doesn't define my expertise but how long I have used it.</p>
      { skills ? 
        <ul className="skill-list">
          { skills.map((skill, index) => {
          return <li><SkillItem key={`skillitem-` + index } skill={ skill} /></li>
          }) }
        </ul> : '' }
    </div>
  )
}
