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
        <a href="https://github.com/MarcusKyung/Valtteri-BOTtas/blob/main/LICENSE.txt">
            <img src="https://img.shields.io/github/license/MarcusKyung/RecipeBox2.Solution?color=orange&style=plastic">
        </a>
        ¨
        <a href="https://linkedin.com/in/MarcusKyung">
            <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=linkedin&colorB=2867B2">
        </a>
    </div>
</div>

#### By _**Marcus Kyung**_

#### _This Valtteri Bottas themed discord bot is designed to interact with users when prompted._

## Contents:
* [Technologies Used](#technologies-used)
* [Description](#description)
* [Setup & installation](#setupinstallation-requirements)
* [Known-bugs](#known-bugs)
* [License](#license)

## Technologies Used:
* _JavaScript_
* _Node Package Manager_
* _Discord.js_
* _dotenv 16.3.1_

## Description:
This discord bot is designed to interact with users when prompted. It is named after Finnish Formula 1 racing driver Valtteri Bottas. When prompted by a server member the bot replies to the user's message. 

## Setup/Installation Requirements:
1. Clone this repo from GH to your local machine.
2. In root directory of the file called Valtteri-BOTtas, add a file titled `.env`.
3. Within `.env`, put in your Discord Bot token using the formatting `TOKEN = [your token here]`.
4. Using your device's terminal navigate to the production directory, "/Valtteri-BOTtas", and run the command: ```nodemon```. Doing so will launch the bot, you should see a confirmation message in your console.
5. Interact with the bot via your discord server. 

## Current Bot Commands:
The bot is currently configured to reply to the below message and slash commands:

### Message Commands: 
| User Input:                                        | Bot Response:                                      |                    
| -------------------------------------------------- | -------------------------------------------------- |                   
| "Hello", "hello", "Hi"                             | Returns greeting                                   |
| "Help", "help"                                     | Shares list of available commands                  |
| "When is the next GP?", "When is the next race?"   | Returns next GP date and location                  |
| "Who are you?", "Who is Valtteri Bottas?"          | Returns brief bio                                  |
| "Give me a Valtteri Bottas fact"                   | Returns one of 10 random facts about Valtteri      |

### Slash Commands: 
| Slash Command Input:                               | Bot Response:                                      |                    
| -------------------------------------------------- | -------------------------------------------------- |                   
| /c43                                               | Returns an embed with info on the Alfa Romeo C43   |
| /teammate                                          | Returns an embed with info about Zhou Guanyu       |

## Planned Bot Commands:

## Additional Bot Features:
* _Activity Status_ - the bot will display a random activity status every 10 minutes based on a list of 3 activities.

## Known Bugs:
* _No known bugs as of 6/22/23._

## License:
_For questions, comments, or concerns please reach out at Kyungmj@gmail.com_

## MIT License:
Copyright (c) [2023] [Marcus Kyung]