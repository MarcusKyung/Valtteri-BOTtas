require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
  {
    name: 'c43',
    description: 'Replies with embed with information about Valtteri\'s car, the Alfa Romeo C43',
  },
  {
    name: 'teammate',
    description: "Replies with info about Valtteri's teammate, Zhou Guanyu"
  },
  {
    name: "tracks",
    description: "gives track info",
    options: [
      {
        name: "bahrain-international-circuit",
        description: "gives info about the Bahrain International Circuit",
        type: 1
      },
      {
        name: "jeddah-corniche-circuit",
        description: "gives info about the Jedda Corniche Circuit",
        type: 1
      },
      {
        name: "albert-park-circuit",
        description: "gives info about the Albert Park Circuit",
        type: 1
      },
      {
        name: "baku-city-circuit",
        description: "gives info about the Baku City Circuit",
        type: 1
      },
      {
        name: "miami-international-autodrome",
        description: "gives info about the Miami International Autodrome",
        type: 1
      },
      {
        name: "autodromo-enzo-e-dino-ferrari",
        description: "gives info about the Autodromo Enzo e Dino Ferrari",
        type: 1
      },
      {
        name: "circuit-de-monaco",
        description: "gives info about the Circuit de Monaco",
        type: 1
      },
      {
        name: "circuit-de-barcelona-catalunya",
        description: "gives info about the circuit de Barcelona - Catalunya",
        type: 1
      },
      {
        name: "circuit-giles-villeneuve",
        description: "gives info about the Circuit Gilles-Villeneuve",
        type: 1
      },
      {
        name: "red-bull-ring",
        description: "gives info about the Red Bull Ring",
        type: 1
      },
      {
        name: "silverstone-circuit",
        description: "gives info about the Silverstone Circuit",
        type: 1
      },
      {
        name: "hungaroring",
        description: "gives info about the Hungaroring",
        type: 1
      },
      {
        name: "circuit-de-spa-francorchamps",
        description: "gives info about the circuit de Spa - Francorchamps",
        type: 1
      },
      {
        name: "circuit-zandvoort",
        description: "gives info about the Circuit Zandvoort",
        type: 1
      },
      {
        name: "autodromo-nazionale-monza",
        description: "gives info about the Jedda Corniche Circuit",
        type: 1
      },
      {
        name: "marina-bay-street-circuit",
        description: "gives info about the Marina Bay Street Circuit",
        type: 1
      },
      {
        name: "suzuka-intl-racing-course",
        description: "gives info about the Suzuka International Racing Course",
        type: 1
      },
      {
        name: "losail-international-circuit",
        description: "gives info about the Losail International Circuit",
        type: 1
      },
      {
        name: "circuit-of-the-americas",
        description: "gives info about the Circuit of the Americas",
        type: 1
      },
      {
        name: "autodromo-hermanos-rodriguez",
        description: "gives info about the Autodromo Hermanos Rodriguez",
        type: 1
      },
      {
        name: "autodromo-jose-carlos-pace",
        description: "gives info about the autodromo Jose Carlos Pace",
        type: 1
      },
      {
        name: "las-vegas-strip-circuit",
        description: "gives info about the Las Vegas Strip Circuit",
        type: 1
      },
      {
        name: "yas-marina-circuit",
        description: "gives info about the Yas Marina Circuit",
        type: 1
      },
    ]
  }
];

const rest = new REST ({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    )

    console.log('Successfully registered application (/) commands.');
  } catch (error){
    console.log(`There was an error ${error}`);
  }
  })();