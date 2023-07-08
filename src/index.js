require("dotenv").config();
const { Client, IntentsBitField, ActivityType } = require("discord.js");
const getGP = require("./Commands/gp.js");
const { getBottasFact } = require("./Commands/bottasFacts");
const { getBottasOpinion } = require("./Commands/bottasOpinions.js");
const checkDriverBirthday = require("./Commands/checkDriverBirthday.js");
const slashCommands = require("./Commands/slashCommands.js");
const weatherApi = require("./Commands/trackConditions.js");
const { getBottasPoints } = require("./Commands/getPoints.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

let status = [
  //array of available bot statuses
  {
    name: "F1 2023",
    type: ActivityType.Playing,
  },
  {
    name: "The Offspring",
    type: ActivityType.Listening,
  },
  {
    name: "VB Best Moments with Mercedes",
    type: ActivityType.Streaming,
    url: "https://www.youtube.com/watch?v=iW7V3Bw8-ws&ab_channel=FORMULA1",
  },
];

client.on("ready", (client) => {
  console.log(`✅${client.user.tag} is online`);

  const channel = client.channels.cache.get(process.env.CHANNEL_ID);
  channel.send("hello!"); //This is also going to console.log hello/gif below due to Discord.js default behavior
  channel.send(
    "https://media3.giphy.com/media/QXOl0Pw5eZRDld0IlF/giphy.gif?cid=ecf05e47e49p2r1iu0nq81ccnp4kam75qol9huo2fhn9valb&ep=v1_gifs_search&rid=giphy.gif&ct=g"
  );

  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${month}-${day}`;
  console.log(formattedDate);
  let birthday = checkDriverBirthday(formattedDate);
  if (birthday) {
    channel.send(birthday);
  }

  setInterval(() => {
    const random = Math.floor(Math.random() * status.length); //Generates a random number between 0 and the length of the status array
    client.user.setActivity(status[random]); //sets the status to a random element in the status array
  }, 600000); //refreshes every 10 minutes (600 seconds)
});

client.on("messageCreate", async (message) => {
  // console.log(message.content); //can include this line to console.log all user and bot messages. Because this is above the below conditional statement it will log all messages, not just the ones that trigger a response
  if (message.author.bot) {
    //checks if message was sent by bot to prevent infinite loops of bot replying to itself
    return;
  }

  if (
    message.content === "Hello" ||
    message.content === "hello" ||
    message.content === "Hi"
  ) {
    message.reply("Hei! This means hello in my native Finnish.");
  } else if (message.content === "Help" || message.content === "help") {
    message.reply(
      'My name is Valtteri BOTas, a Discord Bot. I am still in development, so I don\'t have many commands yet. You can ask me things like: "When is the next GP?" or "Who Are You?"'
    );
  } else if (
    message.content === "When is the next GP?" ||
    message.content === "When is the next race?"
  ) {
    const currentDate = new Date().toISOString().split("T")[0]; // Creates new date object, makes it a string with ISO formatting, splits it at the T, and takes the first part (the date)
    message.reply("The next GP is " + getGP(currentDate));
  } else if (
    message.content === "Who are you?" ||
    message.content === "Who is Valterri Bottas?"
  ) {
    message.reply(
      "I am a Discord Bot, however the real Valtteri Bottas is a Finnish racing driver currently competing in Formula 1 for Alfa Romeo."
    );
  } else if (message.content === "Give me a Valtteri Bottas fact") {
    message.reply(getBottasFact());
  } else if (message.content.toLowerCase().startsWith("does valtteri like")) {
    const query = message.content
      .replace(/does valtteri like/i, "")
      .replace("?", "")
      .trim()
      .toUpperCase();
    console.log(query);
    message.reply(getBottasOpinion(query));
  } else if (
    message.content.startsWith("What are weather and track conditions like at")
  ) {
    const circuit = message.content
      .replace(/What are weather and track conditions like at/i, "")
      .replace("?", "")
      .trim()
      .toLowerCase();
    console.log(circuit);
    const conditions = await weatherApi.getWeatherConditions(circuit);
    if (conditions) {
      const reply = `The weather at ${circuit.toUpperCase()} is ${
        conditions.description
      } with a temperature of ${conditions.temperature}°F and a humidity of ${
        conditions.humidity
      }%. Wind conditions are ${conditions.windSpeed}mph at ${
        conditions.windDegree
      }°`;
      const driverComment = `${conditions.comment}.`;
      message.reply(reply);
      message.reply(driverComment);
    } else {
      message.reply(
        "Sorry, either the circuit is invalid or there was an error retrieving the weather conditions."
      );
    }
  } else if (message.content === "How many points does Valtteri have?") {
    const points = await getBottasPoints();
    if (points) {
      const pointsReply = `Valtteri has ${points.careerPoints} career points`;
      message.reply(pointsReply);
    } else {
      message.reply("Sorry, we can't pull that info right now.");
    }
  }
});

client.on("interactionCreate", (interaction) => {
  slashCommands.handleSlashCommand(interaction);
});

client.login(process.env.TOKEN);
