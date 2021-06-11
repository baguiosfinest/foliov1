import React from 'react';
import Title from "../../Title";
import { Header, BulletText, Sidebar, Subtitle, SkillsBar } from "./components";
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
      text: "<a href='https://www.igorot.me' target='_blank'>https://www.igorot.me</a></em>",
      icon: "globe"
    }],
    socials: [{
      title: "Skype",
      text: "ynnossence",
      icon: "skype"
    },{
      title: "LinkedIn",
      text: "<a href='www.linkedin.com/in/ynnossence' target='_blank'>ynnossence</a>",
      icon: "linkedin"
    },
    {
      title: "Facebook",
      text: "<a href='https://www.facebook.com/stambiac' target='_blank'>Sonny Tambiac</a>",
      icon: "facebook"
    },
    {
      title: "Github",
      text: "<a href='https://github.com/baguiosfinest' target='_blank'>baguiosfinest</a>",
      icon: "github"
    }],
    headline: {
      name: "Sonny Tambiac",
      intro: "Frontend || Wordpress Developer"
    },
    works : [{
      year: "Dec 2019 - Dec 2020",
      text: "<strong>Casual Web Developer</strong><br /><em>U Can Recycle</em>, Brisbane, QLD<br />Managing and developing the company's websites based on wordpress. Some flyer designs and coding scrapper scripts to get potential clients."
    },
    {
      year: "Nov 2018 - Jan 2019",
      text: "<strong>Frontend Developer</strong><br /><em>Cloud Employee</em>, Makati Philippines<br />Translating mockups to a working wordpress sites."
    },{
      year: "Mar 2018 - October 2019",
      text: "<strong>Frontend Developer</strong><br /><em>STOK MNL</em>, Quezon City Philippines<br />Create clean, cross-browser compatible markup utilizing html5, css,3 and javascript. Also make sure it’s responsive across multiple devices and make sure it’s “pixel perfect”"
    },{
      year: "Jan 2018 - April 2018",
      text: "<strong>Software Engineer</strong><br /><em>Pragmanila</em>, Philippines<br />Worked with a bank developing API for their new product."
    },{
      year: "Jan 2016 - Dec 2017",
      text: "<strong>Freelance Developer</strong><br /><em>Freelance</em>, Philippines<br />I have been accepting freelance projects mainly frontend and wordpress projects while being a fulltime dad with my kids."
    },{
      year: "Aug 2015 - Dec 2015",
      text: "<strong>Frontend Developer</strong><br /><em>Zeald</em>, Baguio City Philippines<br />Converting designs to wordpress, shopify and squarespace websites."
    },{
      year: "June 2014 - Aug 2015",
      text: "<strong>Project Based Frontend Developer</strong><br /><em>ICG</em>, Philippines<br />Have worked more than 100 websites (5-10 pages). Converting PSD designs using bootstrap and adding contents and markup via a custom CMS."
    },{
      year: "Feb 2013 - July 2014",
      text: "<strong>Frontend Developer</strong><br /><em>FI Media</em><br />Creating wordpress sites from client provided designs. From setting up, adding contents, plugins and maintenance."
    },{
      year: "Nov 2010 - June 2012",
      text: "<strong>HTML Coder</strong><br /><em>Extanet</em>, www.psdtohtmlcss.com<br />Converting psd/ai/png designs to validated xhtml/css, wordpress theme and email templates."
    }],
    education: [{
      year: "2019 - 2020",
      text: "<strong>Diploma in Information Technology</strong><br /><em>Queensford College</em><br />Brisbane, QLD, Australia"
    },
    {
      year: "2004 – 2007",
      text: "<strong>BS Computer Science</strong><br /><em>University of the Cordilleras</em><br />Baguio City, Philippines"
    }],
    skills : [{
      name: "Html",
      percent: 90
    },{
      name: "CSS",
      percent: 90
    },{
      name: "Javascript",
      percent: 80
    },{
      name: "Wordpress",
      percent: 75
    },{
      name: "Bootstrap",
      percent: 90
    },{
      name: "jQuery",
      percent: 80
    },{
      name: "PHP",
      percent: 70
    },{
      name: "MySQL",
      percent: 70
    },{
      name: "ReactJS",
      percent: 60
    },{
      name: "VueJS",
      percent: 50
    },{
      name: "NodeJS",
      percent: 50
    },{
      name: "Git",
      percent: 50
    },{
      name: "Gulp",
      percent: 50
    },{
      name: "Grunt",
      percent: 50
    },{
      name: "Photoshop",
      percent: 70
    },{
      name: "Illustrator",
      percent: 70
    },{
      name: "Sketch",
      percent: 60
    }],
  }

  let worklen = data.works.length;
  let edulen = data.education.length;

  return (
    <section className="section section-resume">
      <Title title = { title } color = { color } position="center" />
      <div className="paperbox">
        <Sidebar headline={ data.headline } photo={ data.photo } infos={ data.infos } socials={ data.socials } />
        <main className="main-content">
          <Header headline={ data.headline } />
          <div className="inner">
            <Subtitle title="Work Experience" icon="briefcase" />
            
            { data.works.map((work, i) => {
              return <BulletText key={`work-` + i} last={ worklen === i + 1 } year={ work.year } text={ work.text } />
            }) }
            <br /><br />
            <Subtitle title="Education" icon="book-open" />
            { data.education.map((edu, i) => {
              return <BulletText key={`edu-` + i } last={ edulen === i + 1 } year={ edu.year } text={ edu.text } />
            }) }
            <br /><br />
            <Subtitle title="Skills" icon="tools" />
            <SkillsBar key="skillsbar" skills={ data.skills } />
          </div>
        </main>
      </div>
    </section>
  )
}
