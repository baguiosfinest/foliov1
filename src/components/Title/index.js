import React from 'react'

export default function Title({ title, color }) {

  let headerStyle = {
    margin: "0 auto",
    maxWidth: "1280px",
    padding: "30px 0",
    width: "100%",
  }

  let titleStyle = {
    fontSize: "4rem",
    textTransform: "uppercase",
    paddingBottom: "20px",
    borderBottom: "10px solid #000",
    borderBottomColor: color[1][500],
    margin: "0",
    display: "inline-block",
  }

  return (
    <header style={ headerStyle }>
      <h2 style={ titleStyle }>{ title }</h2>
    </header>
  )
}
