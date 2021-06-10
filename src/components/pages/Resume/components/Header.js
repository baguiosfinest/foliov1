import React from 'react'

export default function Header({ headline }) {
  return (
    <header className="header">
      <h1>{ headline.name }</h1>
      <h4>{ headline.intro }</h4>
    </header>
  )
}
