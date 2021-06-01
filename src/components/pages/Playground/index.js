import React from 'react';
import Title from "../../Title";
import Loader from "./Components/Loader";

export default function Playground({title, isActive, pageIndex, color, togglePage}) {

  const exitPage = () => {
    togglePage()
  }

  return (
    <section className="section section-playground">

      <Title title = { title } color = { color } />

      <h2>Coming Soon...</h2>

    </section>    
    // <Loader />
  )
}
