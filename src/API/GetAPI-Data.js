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
    const option = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({lat:lat, lon:lon})
    }
    try{
        const response = await fetch('http://localhost:8000/weather',option);
        const result = await response.json();
        return result;
    }catch(error){
        alert("Connection Problems! Please try later again.");
    }
}

export {getCountryData, getWeatherData}