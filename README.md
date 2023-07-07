# _Valtteri BOTtas, a Discord Bot_
<div align="center">
    <!-- Project Shields -->
    <div align="center">
        <a href="https://github.com/MarcusKyung/Valtteri-BOTtas/graphs/contributors">
            <img src="https://img.shields.io/github/contributors/MarcusKyung/valtteri-Bottas.svg?style=plastic">
        </a>
        ¨
        <a href="https://github.com/MarcusKyung/Valtteri-BOTtas/stargazers">
            <img src="https://img.shields.io/github/stars/MarcusKyung/valtteri-Bottas.svg?color=yellow&style=plastic">
        </a>
        ¨
        <a href="https://github.com/MarcusKyung/Valtteri-BOTtas/issues">
            <img src="https://img.shields.io/github/issues/MarcusKyung/valtteri-Bottas?style=plastic">
        </a>
        ¨
        <a href="https://github.com/MarcusKyung/Valtteri-BOTtas/blob/main/license.txt">
            <img src="https://img.shields.io/github/license/MarcusKyung/Valtteri-BOTtas?color=orange&style=plastic">
        </a>
        ¨
        <a href="https://linkedin.com/in/MarcusKyung">
            <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=linkedin&colorB=2867B2">
        </a>
    </div>
</div>

#### By _**Marcus Kyung**_

#### _This Valtteri Bottas themed discord bot is designed to interact with users when prompted._

<img src="https://media1.giphy.com/media/6iWedW7q9zHBEYg0RZ/giphy.gif?cid=ecf05e47eqjaypjag2d96ugvqb9aj5t8to39pzq7ldluz5u2&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="200"/>

## Contents:
* [Technologies Used](#technologies-used)
* [Description](#description)
* [Setup & installation](#setupinstallation-requirements)
* [Current Bot Commands](#current-bot-commands)
* [Additional Current Bot Features](#additional-current-bot-features)
* [Future Bot Features](#future-bot-features)
* [Known Bugs](#known-bugs)
* [License](#license)

## Technologies Used:
* _JavaScript_
* _Node Package Manager_
* _Discord.js 14.11.0_
* _Dotenv 16.3.1_

## Description:
This discord bot is designed to interact with users when prompted. It is named after Finnish Formula 1 racing driver Valtteri Bottas. When prompted by a user via slash command or message the bot will return a reply/response. This bot also has additional features upon startup. View all features below.

## Setup/Installation Requirements:
1. Clone this repo from GH to your local machine.
2. In root directory of the file called Valtteri-BOTtas, add a file titled `.env`.
3. Within `.env`, put in your Discord Bot token using the formatting `TOKEN = [your token here]`.
4. Using your device's terminal navigate to the production directory, "/Valtteri-BOTtas", and run the command: ```nodemon```. Doing so will launch the bot, you should see a confirmation message in your console. The bot will also appear as online in your discord server with a Playing, Watching, or Listening status which rotates every 10 minutes. The bot will also send a channel message saying "hello" and a preset "welcome" gif.
5. Interact with the bot via your discord server. 

## Current Bot Commands:
The bot is currently configured to reply to the below message and slash commands:

### Message Commands: 
| User Input:                                            | Bot Response:                                                       |                    
| ------------------------------------------------------ | ------------------------------------------------------------------- |                   
| "Hello", "hello", "Hi"                                 | Returns greeting                                                    |
| "Help", "help"                                         | Shares list of available commands                                   |
| "When is the next GP?", "When is the next race?"       | Returns next GP date and location                                   |
| "Who are you?", "Who is Valtteri Bottas?"              | Returns brief bio                                                   |
| "Give me a Valtteri Bottas fact"                       | Returns one of 10 random facts about Valtteri                       |
| "Does Valtteri like (XYZ)"                             | A thumbs up/down or shrug gif reply based on listed likes/dislikes  |
| "What are weather and track conditions like at (XYZ)?" | Returns the temp, humidity, wind info, and a comment on the weather |

_Note: the bot uses OpenWeatherAPI to get current weather data. The bot will only return weather data for 2023 circuit locations. Locations must be queried using specific formatting and track naming conventions ("What are weather and track conditions like at (XYZ)?"). The bot will return a message if the track/circuit is not listed in the API._

| Circuit Name:                                          | Coordinates Used in API Call:                                       |                    
| ------------------------------------------------------ | ------------------------------------------------------------------- |                   
| bahrain                                                |  lat: 26.0325, lon: 50.5106
| jeddah                                                 |  lat: 21.5433, lon: 39.1728
| melbourne                                              |  lat: -37.8497, lon: 144.968
| baku                                                   |  lat: 40.3725, lon: 49.8533
| miami                                                  |  lat: 25.7781, lon: -80.1956
| imola                                                  |  lat: 44.3439, lon: 11.7167
| monaco                                                 |  lat: 43.7347, lon: 7.4206
| barcelona                                              |  lat: 41.57, lon: 2.2611
| gilesvilleneuve                                        |  lat: 45.5, lon: -73.5228
| redbullring                                            |  lat: 47.2197, lon: 14.7647
| silverstone                                            |  lat: 52.0786, lon: -1.0169
| hungaroring                                            |  lat: 47.5839, lon: 19.2486
| spa                                                    |  lat: 50.4372, lon: 5.9714
| zandvoort                                              |  lat: 52.3883, lon: 4.5422
| monza                                                  |  lat: 45.6156, lon: 9.2811
| marinabay                                              |  lat: 1.2914, lon: 103.8644
| suzuka                                                 |  lat: 34.8431, lon: 136.5411
| losail                                                 |  lat: 25.4722, lon: 51.4583
| cota                                                   |  lat: 30.1328, lon: -97.6411
| hermanosrodriguez                                      |  lat: 19.4042, lon: -99.0907
| interlagos                                             |  lat: -23.7036, lon: -46.6997
| lasvegas                                               |  lat: 36.2661, lon: -115.1797
| yasmarina                                              |  lat: 24.4672, lon: 54.6031

### Slash Commands: 
| Slash Command Input:                               | Bot Response:                                                      |                    
| -------------------------------------------------- | ------------------------------------------------------------------ |                   
| /c43                                               | Returns an embed with info on the Alfa Romeo C43                   |
| /teammate                                          | Returns an embed with info about Zhou Guanyu                       |
| /track (_track name_)                              | Returns an embed with info specific tracks/circuts                 |
| /merch                                             | Returns an embed linking to the official Alfa Romeo teamwear site  |

## Additional Current Bot Features:
* _Welcome Message on startup_ - upon startup the bot will say "hello" and send a preset welcome gif.
* _Activity Status_ - the bot will display a random activity status every 10 minutes based on a list of 3 activities.
* _Happy Birthday Messages_ - the bot will send a message to the server when it is a driver's birthday, otherwise no message is sent on startup.
* _Slash command for VB merch_ - the bot will have a slash command for server users to view Valtteri's Alfa Romeo merch.
* _Race Weather Updates_ - the bot uses the OpenWeatherAPI to return temp, humidity, weather description, and wind info along with a comment about the track conditions. This feature is only available for 2023 circuit locations. Usage of this command is a little clunky since the API requires specific formatting and track naming conventions ("What are weather and track conditions like at (XYZ)?"). Refactor is planned in future updates.


## Future Bot Features:
* _F1 Trivia_ - the bot will be able to provide trivia questions to server members about Valtteri, and keep their score"
* _F1 Team Standings_ - the will be able to connect to an API and return current F1 standings or race results. Ideally, this will be my F1 API here: https://github.com/MarcusKyung/F1DriverAPI.Solution.
* _Bottas Race Standings_ - the will be able to connect to an API and return current Valtteri's points/results.
* _Slash to see random VB gif_ - the bot will return a random Valtteri Bottas gif either using a list or through a giphy API call
* _Race Countdown_ - the bot will return a countdown to the next GP.
* _F1 News Updates_ the bot will use an API or RSS feed to fetch the latest Formula 1 news and updates. The bot will periodically post news articles, interviews, and announcements from reliable sources on a scheduled interval.

## Known Bugs:
* _No known bugs as of 7/4/23._

## License:
_For questions, comments, or concerns please reach out at Kyungmj@gmail.com_

## MIT License:
Copyright (c) [2023] [Marcus Kyung]