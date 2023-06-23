require('dotenv').config();
const { Client, IntentsBitField, } = require('discord.js');
const getGP = require('./Commands/gp.js');
const { getBottasFact } = require('./Commands/bottasFacts');


const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
})

client.on('ready', (client) => {
  console.log(`✅${client.user.tag} is online`)
  });

client.on('messageCreate', (message) => {
  console.log(message.content);
  if (message.author.bot){
    return;
  } 

  if (message.content === "Hello" || message.content === 'hello' || message.content === 'Hi') {
    message.reply("Hei! This means hello in my native Finnish.");
  } else if (message.content === "Help" || message.content === "help") {
    message.reply("My name is Valtteri BOTas, a Discord Bot. I am still in development, so I don't have many commands yet. You can ask me things like: \"When is the next GP?\" or \"Who Are You?\"");
  } else if (message.content === "When is the next GP?" || message.content === "When is the next race?") {
    const currentDate = new Date().toISOString().split('T')[0]; // Creates new date object, makes it a string with ISO formatting, splits it at the T, and takes the first part (the date)
    message.reply("The next GP is " + getGP(currentDate));
  } else if (message.content === "Who are you?" || message.content === "Who is Valterri Bottas?") {
    message.reply("I am a Discord Bot, however the real Valtteri Bottas is a Finnish racing driver currently competing in Formula 1 for Alfa Romeo.");
  } else if (message.content === "Give me a Valtteri Bottas fact") {
    message.reply(getBottasFact());
  }
  });

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  console.log(interaction.commandName === 'hey')
  interaction.reply('Hei! This means hello in my native Finnish.')
});

client.login(process.env.TOKEN)