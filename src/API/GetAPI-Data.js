async function getCountryData(countryName){
    try{
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fields=name,latlng`);
        const result = await response.json();
        return result;
    }catch(error){
        alert("Connection Problems! Please try later again.");
    }
}

async function getWeatherData(lat, lon){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
        const result = await response.json();
        return result;
    }catch(error){
        alert("Connection Problems! Please try later again.");
    }
}

export {getCountryData, getWeatherData}