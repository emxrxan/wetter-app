import React from 'react'
import { FaWind } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import './WetterDetail.css'

export default function WetterDetail(props) {
  return (
    <div className='wetterDetails'>
        <div className='details'><WiHumidity />Humidity: {props.humidity} % </div>
        <div className='details'><FaWind />Wind: {props.wind} km/h</div>
    </div>
  )
}
