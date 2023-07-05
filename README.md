# _Valtteri BOTtas, a Discord Bot_
<div align="center">
    <!-- Project Shields -->
    <div align="center">
        <a href="https://github.com/MarcusKyung/Valtteri-BOTtas/graphs/contributors">
            <img src="https://img.shields.io/github/contributors/MarcusKyung/RecipeBox2.Solution.svg?style=plastic">
        </a>
        ¨
        <a href="https://github.com/MarcusKyung/Valtteri-BOTtas/stargazers">
            <img src="https://img.shields.io/github/stars/MarcusKyung/RecipeBox2.Solution.svg?color=yellow&style=plastic">
        </a>
        ¨
        <a href="https://github.com/MarcusKyung/Valtteri-BOTtas/issues">
            <img src="https://img.shields.io/github/issues/MarcusKyung/RecipeBox2.Solution?style=plastic">
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
| User Input:                                        | Bot Response:                                                      |                    
| -------------------------------------------------- | ------------------------------------------------------------------ |                   
| "Hello", "hello", "Hi"                             | Returns greeting                                                   |
| "Help", "help"                                     | Shares list of available commands                                  |
| "When is the next GP?", "When is the next race?"   | Returns next GP date and location                                  |
| "Who are you?", "Who is Valtteri Bottas?"          | Returns brief bio                                                  |
| "Give me a Valtteri Bottas fact"                   | Returns one of 10 random facts about Valtteri                      |
| "Does Valtteri like (XYZ)"                         | A thumbs up/down or shrug gif reply based on listed likes/dislikes |

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


## Future Bot Features:
* _F1 Trivia_ - the bot will be able to provide trivia questions to server members about Valtteri, and keep their score"
* _F1 Team Standings_ - the will be able to connect to an API and return current F1 standings or race results. Ideally, this will be my F1 API here: https://github.com/MarcusKyung/F1DriverAPI.Solution.
* _Bottas Race Standings_ - the will be able to connect to an API and return current Valtteri's points/results.
* _Slash to see random VB gif_ - the bot will return a random Valtteri Bottas gif either using a list or through a giphy API call
* _Race Countdown_ - the bot will return a countdown to the next GP.
* _Race Weather Updates_ - the bot will return weather forecasts, track conditions, and any potential impact on the race.
* _F1 News Updates_ the bot will use an API or RSS feed to fetch the latest Formula 1 news and updates. The bot will periodically post news articles, interviews, and announcements from reliable sources on a scheduled interval.

## Known Bugs:
* _No known bugs as of 7/4/23._

## License:
_For questions, comments, or concerns please reach out at Kyungmj@gmail.com_

## MIT License:
Copyright (c) [2023] [Marcus Kyung]