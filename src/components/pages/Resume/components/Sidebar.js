import React from 'react';
import { Photo, IconText, Subtitle } from "./index";

export default function Sidebar({ infos, socials, photo }) {
  return (
    <aside className="sidebar">
      <Photo photo={ photo } />
      <Subtitle title="Info" />
      {
        infos.map((info, i) => {
          return <IconText key={`info-` + i} icon={ info.icon } title={ info.title } text={ info.text } />
        })
      }
      <br />
      <Subtitle title="Social" />
      {
        socials.map((social, i) => {
          return <IconText key={`social-` + i} fabic={true} icon={ social.icon } title={ social.title } text={ social.text } />
        })
      }
      <br />
      <Subtitle title="Reference" />
      <p>Available upon request.</p>
    </aside>
  )
}
