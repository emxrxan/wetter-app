import React from 'react'
import { useContext } from 'react'
import './Wetter.css'
import Context from '../../Context'
import { Fragment } from 'react'

import WetterHeader from '../WetterHeader/WetterHeader';
import WetterTemp from '../WetterTemp/WetterTemp';
import WetterDetail from '../WetterDetail/WetterDetail';

export default function Wetter() {

    const { currentWeather } = useContext(Context);

  return (
        <Fragment>
            {currentWeather.length > 0 
                ?(
                    <div className='Wetter-mainContainer'>
                        <WetterHeader name={currentWeather[0].name} description={currentWeather[0].weather.weather[0].description}/>
                        <WetterTemp icon={currentWeather[0].weather.weather[0].icon} temp={currentWeather[0].weather.main.temp}/>
                        <WetterDetail humidity={currentWeather[0].weather.main.humidity} wind={currentWeather[0].weather.wind.speed}/>
                    </div>
                
                ): <h3>Please select a country.</h3>}
        </Fragment>
  )
}
