import React from 'react'
import './WetterTemp.css'

export default function WetterTemp(props) {
  return (
    <div className='wetterTemp'>
        <img src={`https://openweathermap.org/img/wn/${props.icon}@4x.png`} alt="Bild vom Wetter" title='Bild vom Wetter'/>
        <span>{`${props.temp}°C`}</span>
    </div>
  )
}
