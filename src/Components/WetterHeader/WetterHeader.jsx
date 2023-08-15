import React from 'react'
import './WetterHeader.css'

export default function WetterHeader(props) {
  return (
    <div className='wetterHeader'>
        <h1>{props.name}</h1>
        <h3>{props.description}</h3>
    </div>
  )
}
