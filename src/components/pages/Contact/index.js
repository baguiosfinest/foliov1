import React from 'react';
import Title from '../../Title';
import './contact.scss';

const Contact = ({title, isActive, pageIndex, color, togglePage}) => {
  // const exitPage = () => {
  //   togglePage()
  // }

  return (
    <section className="section section-contact">
      <Title title = { title } color = { color } />
      <p>You can contact me via my email:</p>
      <p><a href="mailto:ynnossence@gmail.com">ynnossence@gmail.com</a></p>
    </section>
  )
}

export default Contact;
