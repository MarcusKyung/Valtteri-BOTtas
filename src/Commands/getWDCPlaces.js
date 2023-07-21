require("dotenv").config();
const axios = require("axios");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; //Ignore self-signed certificate error. Not suitable for prod, but ok here

const wordToNumber = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
  SIXTH: 6,
  SEVENTH: 7,
  EIGHTH: 8,
  NINTH: 9,
  TENTH: 10,
  ELEVENTH: 11,
  TWELFTH: 12,
  THIRTEENTH: 13,
  FOURTEENTH: 14,
  FIFTEENTH: 15,
  SIXTEENTH: 16,
  SEVENTEENTH: 17,
  EIGHTEENTH: 18,
  NINETEENTH: 19,
  TWENTIETH: 20,
  TWENTYFIRST: 21,
};

async function getWDCPlaces(place) {
  try {
    const response = await axios.get(
      `https://localhost:5001/api/v2/Drivers?sortBy=currentSeasonPoints`
    );
    const data = response.data;
    const correspondingNumber = wordToNumber[place];
    if (correspondingNumber === undefined) {
      return "Invalid place. Please enter a valid place (e.g., FIRST, SECOND, THIRD, etc.).";
    }

    const query = data[correspondingNumber - 1];

    const driverInfo = {
      driverName: query.driverName,
      currentSeasonPoints: query.currentSeasonPoints
    };
    return driverInfo.driverName + " is currently in " + "place " + correspondingNumber + " in the WDC with " + driverInfo.currentSeasonPoints + " points.";
  } catch (error) {
    console.error("Error making API call:", error);
    return null;
  }
}

module.exports = {
  getWDCPlaces,
};