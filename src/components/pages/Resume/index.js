import React from 'react';
import Title from "../../Title";
import { Header, Photo, IconText, BulletText, Sidebar, Subtitle } from "./components";
import './resume.scss';

export default function Resume({ title, color }) {

  let data = {
    photo: {
      url: "",
      initials: "ST",
    },
    infos: [{
      title: "Name",
      text: "<strong>Sonny Tambiac</strong>",
      icon: "user"
    },
    {
      title: "Address",
      text: "<em>9 Cosmos Street,<br />MacGregor QLD, 4109</em>",
      icon: "map-marker-alt"
    },
    {
      title: "Phone",
      text: "<em>0468854086</em>",
      icon: "phone-alt"
    },
    {
      title: "Email",
      text: "<a href='mailto:ynnossence@gmail.com'>ynnossence@gmail.com</a></em>",
      icon: "envelope"
    },
    {
      title: "Website",
      text: "<a href='https://www.igorot.me'>https://www.igorot.me</a></em>",
      icon: "globe"
    }],
    socials: [{
      title: "Skype",
      text: "ynnossence",
      icon: "skype"
    },{
      title: "LinkedIn",
      text: "ynnossence",
      icon: "linkedin"
    },
    {
      title: "Facebook",
      text: "ynnossence",
      icon: "facebook"
    },
    {
      title: "Github",
      text: "ynnossence",
      icon: "github"
    }],
    headline: {
      name: "Sonny Tambiac",
      intro: "Frontend || Wordpress Developer"
    },
    works : [{
      year: "2011 - 2012",
      text: "<strong>SanaPhil Global Solutions</strong><br /><em>Web Developer</em><br />Some Description here"
    },
    {
      year: "2011 - 2012",
      text: "<strong>SanaPhil Global Solutions</strong><br /><em>Web Developer</em><br />Some Description here"
    }]
  }

  let worklen = data.works.length;

  return (
    <section className="section section-resume">
      <Title title = { title } color = { color } position="center" />
      <div className="paperbox">
        <Sidebar photo={ data.photo } infos={ data.infos } socials={ data.socials } />
        <main className="main-content">
          <Header headline={ data.headline } />
          <div className="inner">
            <Subtitle title="Work Experience" icon="briefcase" />
            
            { data.works.map((work, i) => {
              return <BulletText last={ worklen === i + 1 } year={ work.year } text={ work.text } />
            }) }
            <br /><br />
            <Subtitle title="Education" icon="book-open" />
            <Subtitle title="Skills" icon="tools" />
          </div>
        </main>
      </div>
    </section>
  )
}
