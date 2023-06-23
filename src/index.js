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

  if (message.content === "Hello" || message.content === 'hello' || message.content === 'Hi') {
    message.reply("Hei! This means hello in my native Finnish.");
  } else if (message.content === "Help" || message.content === "help") {
    message.reply("My name is Valtteri BOTas, a Discord Bot. I am still in development, so I don't have many commands yet. You can ask me things like: \"When is the next GP?\" or \"Who Are You?\"");
  } else if (message.content === "When is the next GP?" || message.content === "When is the next race?") {
    const currentDate = new Date().toISOString().split('T')[0]; // Creates new date object, makes it a string with ISO formatting, splits it at the T, and takes the first part (the date)
    message.reply("The next GP is " + getGP(currentDate));
  } else if (message.content === "Who are you?" || message.content === "Who is Valterri Bottas?") {
    message.reply("I am a Discord Bot, however the real Valtteri Bottas is a Finnish racing driver currently competing in Formula 1 for Alfa Romeo.");
  }
  });

function getGP(date) {
  if (date < "2023-07-02") {
    return "the Austrian GP on Sunday, July 2nd 2023 at the Red Bull Ring - Get ready for some high-speed action at the Red Bull Ring!";
  } else if (date < "2023-07-09") {
    return "the British GP on Sunday, July 9th 2023 at Silverstone - Prepare for a thrilling race at the historic Silverstone Circuit!";
  } else if (date < "2023-07-23") {
    return "the Hungarian GP on Sunday, July 23rd 2023 at the Hungaroring - Experience the twists and turns of the iconic Hungaroring!";
  } else if (date < "2023-07-30") {
    return "the Belgian GP on Sunday, July 30th 2023 at Spa-Francorchamps - Brace yourself for a challenging race at the legendary Spa-Francorchamps!";
  } else if (date < "2023-08-27") {
    return "the Dutch GP on Sunday, August 27th 2023 at Zandvoort - Feel the orange wave and witness the excitement at Zandvoort!";
  } else if (date < "2023-09-03") {
    return "the Italian GP on Sunday, September 3rd 2023 at Monza - Get your engines revved up for the high-speed race at the Temple of Speed, Monza!";
  } else if (date < "2023-09-17") {
    return "the Singapore GP on Sunday, September 17th 2023 at Marina Bay - Lights, glamour, and intense racing await you at the stunning Marina Bay Street Circuit!";
  } else if (date < "2023-09-24") {
    return "the Japanese GP on Sunday September 24th at Suzuka - Embark on a journey to Suzuka, the land of legendary battles and unforgettable moments!"
  } else if (date < "2023-10-08") {
    return "the Quatar GP on Sunday, October 8th 2023 at Losail - Experience the thrill of night racing under the dazzling lights of Losail!"
  } else if (date < "2023-10-22") {
    return "the United States GP on Sunday, October 22nd 2023 at Circuit of the Americas - Get ready for a taste of American racing spirit at the Circuit of the Americas!"
  } else if (date < "2023-10-29") {
    return "the Mexico City GP on Sunday, October 29th 2023 at Autódromo Hermanos Rodríguez - Feel the vibrant atmosphere and passion of Mexican racing at Autódromo Hermanos Rodríguez!"
  } else if (date < "2023-11-05") {
    return "the Brazilian GP on Sunday, November 5th 2023 at Interlagos - Witness the samba of speed at the iconic Interlagos circuit in Brazil!"
  } else if (date < "2023-11-19") {
    return "the Las Vegas GP on Sunday, November 19th 2023 at Las Vegas Street Circuit - Get ready for a spectacle of speed on the dazzling streets of Las Vegas!"
  } else if (date < "2023-11-26") {
    return "the Abu Dhabi GP on Sunday, November 26th 2023 at Yas Marina - Conclude the season in style at the glamorous Yas Marina Circuit in Abu Dhabi!"
  } else if (date < "2024-03-17") { 
    return "anticipated to be the Bahrain GP on Sunday March 3rd 2024 at Bahrain International Circuit (Sakhir) to start the 2024 season."
  } 
}




client.login(process.env.TOKEN)