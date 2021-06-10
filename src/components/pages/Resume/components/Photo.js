import React from 'react'

export default function Photo({ photo }) {
  return (
    <div className="photo">
      { photo.url ?  <figure><img src={ photo.url } alt={ photo.initials } /></figure> : <h3>{ photo.initials }</h3> }
    </div>
  )
}
