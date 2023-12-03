import { getCoordinates } from "./getCoordonnees.mjs";
import axios from 'axios';

function getWeatherData(latitude, longitude) {
    let currentTemperature = document.getElementById("currentNumber");
    let matinTemperature = document.getElementById("matinNumber");
    let apremTemperature = document.getElementById("apremNumber");
    let soirTemperature = document.getElementById("soirNumber");

    let apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode&hourly=temperature_80m,weather_code&daily=weathercode,temperature_2m_max&timezone=Europe%2FLondon&forecast_days=1`;

    axios.get(apiUrl)
        .then(
            function (jsonResponse) {
                currentTemperature.textContent = jsonResponse.data.current.temperature_2m + " °C";
                matinTemperature.textContent = jsonResponse.data.hourly.temperature_80m[10] + "°C";
                apremTemperature.textContent = jsonResponse.data.hourly.temperature_80m[16] + "°C";
                soirTemperature.textContent = jsonResponse.data.hourly.temperature_80m[22] + "°C";


                document.getElementsByClassName('currentIcon')[0].src = getWeatherCode(jsonResponse.data.current.weathercode)
                document.getElementsByClassName('matinIcon')[0].src = getWeatherCode(jsonResponse.data.hourly.weather_code[10])
                document.getElementsByClassName('apremIcon')[0].src = getWeatherCode(jsonResponse.data.hourly.weather_code[16])
                document.getElementsByClassName('soirIcon')[0].src = getWeatherCode(jsonResponse.data.hourly.weather_code[22])
            })

}

let cityLinks = document.querySelectorAll('.dotLocation');

cityLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        getCoordinates(link.id).then(city => getWeatherData(city.latitude, city.longitude))

      
    });
});


function getWeatherCode (weather_code){
   
    if (weather_code == 0) {
        return '../img/sun.png';
    }
    else if (weather_code < 4  ) {
        return '../img/nuageux.png';
    }
    else if (weather_code < 58  ) {
        return '../img/nuage.png';
    }
    else if (weather_code < 68  ) {
        return '../img/pluie.png';
    }
    else if (weather_code < 78  ) {
        return '../img/neige.png';
    }
    else if (weather_code < 83  ) {
        return '../img/pluie.png';
    }
    else if (weather_code < 87  ) {
        return '../img/neige.png';
    }
    else if (weather_code < 100  ) {
        return '../img/orage.png';
    }
   
}