require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ActivityType } = require('discord.js');
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

let status = [ //array of available bot statuses
  {
    name: "F1 2023",
    type: ActivityType.Playing
  },
  {
    name: "The Offspring",
    type: ActivityType.Listening
  },
  {
    name: "VB Best Moments with Mercedes",
    type: ActivityType.Streaming,
    url: "https://www.youtube.com/watch?v=iW7V3Bw8-ws&ab_channel=FORMULA1",
  },
]

client.on('ready', (client) => {
  console.log(`✅${client.user.tag} is online`)

  const channel = client.channels.cache.get(process.env.CHANNEL_ID); 
  channel.send('hello!'); //This is also going to console.log hello/gif below due to Discord.js default behavior
  channel.send('https://media3.giphy.com/media/QXOl0Pw5eZRDld0IlF/giphy.gif?cid=ecf05e47e49p2r1iu0nq81ccnp4kam75qol9huo2fhn9valb&ep=v1_gifs_search&rid=giphy.gif&ct=g');

  setInterval(() => {
    const random = Math.floor(Math.random() * status.length) //Generates a random number between 0 and the length of the status array
    client.user.setActivity(status[random]) //sets the status to a random element in the status array
  }, 600000); //refreshes every 10 minutes (600 seconds)
});

client.on('messageCreate', (message) => {
  console.log(message.content);
  if (message.author.bot){ //checks if message was sent by bot to prevent infinite loops of bot replying to itself
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
  if (!interaction.isChatInputCommand()) return; //code below will only run if the interaction is a slash command

  if (interaction.commandName === 'c43') {
    const embed = new EmbedBuilder()
                      .setTitle("About the C43")
                      .setURL("https://www.sauber-group.com/motorsport/formula-1/c43/")
                      .setDescription("The Alfa Romeo C43 is a Formula One car designed and built by Alfa Romeo competing in the 2023 Formula One World Championship. The car is driven by Valtteri Bottas and Zhou Guanyu, both in their second year at the team.")
                      .setThumbnail("https://media.formula1.com/image/upload/content/dam/fom-website/manual/2023/Launches2023/AlfaRomeoLaunch/C43_Top_LM_ZHO_4-5.jpg.transform/9col/image.jpg")
                      .setColor(0xa51c2f)
                      .setImage("https://media.formula1.com/image/upload/content/dam/fom-website/manual/2023/Launches2023/AlfaRomeoLaunch/C43_Front-Dynamic-Left-V4_LM_BOT_4-5.jpg.transform/9col/image.jpg")
                      .setTimestamp()
    interaction.reply({ embeds: [embed] })
  } else if (interaction.commandName === 'teammate') {
                      const embed = new EmbedBuilder()
                      .setTitle("About Zhou Guanyu")
                      .setURL("https://www.sauber-group.com/motorsport/formula-1/team/zhou-guanyu/")
                      .setDescription("Zhou Guanyu is a Chinese racing driver currently competing in Formula 1 for Alfa Romeo. He is the first Chinese driver to compete in Formula 1 and is in his second season.")
                      .setThumbnail("https://www.sauber-group.com/wp-content/uploads/2023/02/LM-Stake_ZHO_RS_fullbody_leftSide_0630n.jpg")
                      .setColor(0xa51c2f)
                      .setTimestamp()
    interaction.reply({ embeds: [embed] })
  }
});

client.login(process.env.TOKEN)