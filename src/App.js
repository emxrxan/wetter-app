import React from "react";
import { useState, useEffect } from "react";
import { getWeatherData } from "./API/GetAPI-Data";
import LandContainer from "./Components/LandContainer/LandContainer";
import Context from "./Context";
import Wetter from "./Components/Wetter/Wetter";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [currentCountry, setCurrentCountry] = useState([]);
  const [currentWeather, setCurrentWeather] = useState([]);

  const setWeatherData = async () => {
    if(currentCountry.length > 0){
      const result = await getWeatherData(currentCountry[0].latlng[0], currentCountry[0].latlng[1]);
      setCurrentWeather([{weather: result, name: currentCountry[0].name}]);
    }
  }

  // eslint-disable-next-line
  useEffect(()=>{ setWeatherData(); },  [currentCountry]);

  return (
    <Context.Provider value={{currentWeather ,currentCountry, setCurrentCountry}}>
      <div className="main-container">
        <LandContainer />
        <Wetter />
      </div>
    </Context.Provider>
  );
}

export default App;
