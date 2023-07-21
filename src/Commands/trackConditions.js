require('dotenv').config();
const axios = require('axios');

const circuitCoordinates = {
  bahrain: { lat: 26.0325, lon: 50.5106 },
  jeddah: { lat: 21.5433, lon: 39.1728 },
  melbourne: { lat: -37.8497, lon: 144.968 },
  baku: { lat: 40.3725, lon: 49.8533 },
  miami: { lat: 25.7781, lon: -80.1956 },
  imola: { lat: 44.3439, lon: 11.7167 },
  monaco: { lat: 43.7347, lon: 7.4206 },
  barcelona: { lat: 41.57, lon: 2.2611 },
  gilesvilleneuve: { lat: 45.5, lon: -73.5228 },
  redbullring: { lat: 47.2197, lon: 14.7647 },
  silverstone: { lat: 52.0786, lon: -1.0169 },
  hungaroring: { lat: 47.5839, lon: 19.2486 },
  spa: { lat: 50.4372, lon: 5.9714 },
  zandvoort: { lat: 52.3883, lon: 4.5422 },
  monza: { lat: 45.6156, lon: 9.2811 },
  marinabay: { lat: 1.2914, lon: 103.8644 },
  suzuka: { lat: 34.8431, lon: 136.5411 },
  losail: { lat: 25.4722, lon: 51.4583 },
  cota: { lat: 30.1328, lon: -97.6411 },
  hermanosrodriguez: { lat: 19.4042, lon: -99.0907 },
  interlagos: { lat: -23.7036, lon: -46.6997 },
  lasvegas: { lat: 36.2661, lon: -115.1797 },
  yasmarina: { lat: 24.4672, lon: 54.6031 },
};

async function getWeatherConditions(circuit) {
  const coordinates = circuitCoordinates[circuit.toLowerCase()];
  if (!coordinates) {
    return null; // Invalid circuit, return null
  }

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&appid=${process.env.API_KEY}`);
    const data = response.data;
    const comment = getWeatherComment(data.weather[0].id);
    const conditions = {
      weatherCode: data.weather[0].id,
      description: data.weather[0].description,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      windDegree: data.wind.deg,
      comment: comment,
    };
    return conditions;
  } catch (error) {
    console.error('Error making API call:', error);
    return null;
  }
}

function getWeatherComment(weatherCode) {
  if (weatherCode >= 500 && weatherCode <= 599) {
    return 'Valtteri says: Looks like rain, better bring inters or full wets';
  } else if (weatherCode >= 300 && weatherCode <= 399) {
    return 'Valtteri says: Looks like rain, better bring inters or full wets';
  } else if (weatherCode > 800 && weatherCode <= 899) {
    return 'Valtteri says: Clouds in the sky, but no rain. Bring your slicks';
  } else if (weatherCode === 800) {
    return 'Valtteri says: Clear skies, bring your slicks';
  } else if (weatherCode === 741) {
    return 'Valtteri says: Foggy conditions on track, be careful';
  }
}

// SWITCH CASE VERSION:
// function getWeatherComment(weatherCode) { 
//   switch (weatherCode) {
//     case 800:
//       return 'Clear skies at the moment';
//     case 741:
//       return 'Foggy conditions on track, be careful';
//     case 300:
//     case 301:
//     case 302:
//     case 310:
//     case 311:
//     case 312:
//     case 313:
//     case 314:
//     case 321:
//     case 500:
//     case 501:  
//     case 502:
//     case 503:
//     case 504:
//     case 511:
//     case 520:
//     case 521:
//     case 522:
//     case 531:
//       return 'Looks like rain, better bring inters or full wets';
//     case 801:
//     case 802:
//     case 803:
//     case 804:
//       return 'Clouds in the sky, but no rain. Bring your slicks';
//     default:
//       return '';
//   }
// }

module.exports = {
  getWeatherConditions,
};
