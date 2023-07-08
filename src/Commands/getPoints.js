require("dotenv").config();
const axios = require("axios");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; //Ignore self-signed certificate error. Not suitable for prod, but ok here

async function getBottasPoints() {
  try {
    const response = await axios.get(
      `https://localhost:5001/api/v2/Drivers/14`
    );
    const data = response.data;
    const bottasPoints = {
      careerPoints: data.careerPoints,
      raceWins: data.raceWins,
      podiums: data.podiums,
      wdcChampionships: data.wdcChampionships,
    };
    return bottasPoints;
  } catch (error) {
    console.error("Error making API call:", error);
    return null;
  }
}

module.exports = {
  getBottasPoints,
};
