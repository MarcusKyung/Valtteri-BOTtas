require('dotenv').config();
const { Client, IntentsBitField, } = require('discord.js');

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

  if (message.content === 'hello') {
    message.reply("hello");
  } else if (message.content === 'help') {
    message.reply("My name is Valtteri BOTas, a Discord Bot. I am still in development, so I don't have many commands yet.")
  }
  });

client.login(process.env.TOKEN)