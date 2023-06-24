require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'c43',
    description: 'Replies with embed with information about Valtteri\'s car, the Alfa Romeo C43',
  },
  {
    name: 'teammate',
    description: "Replies with info about Valtteri's teammate, Zhou Guanyu"
  }
];

const rest = new REST ({ version: '10' }).setToken(process.env.TOKEN);

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