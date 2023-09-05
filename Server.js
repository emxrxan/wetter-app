const Port = 8000;
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
require('dotenv').config()

app.post('/weather', async(request, respone) => {
    let result;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${request.body.lat}&lon=${request.body.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
    result = await response.json();
    respone.json(result);
})

app.listen(8000, () => console.log(`listen to Port ${Port}`))
