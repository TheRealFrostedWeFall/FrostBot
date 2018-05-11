const Discord = require("discord.js");
const botconfig = require("../botconfig");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {

  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}
  let userxp = xp[message.author.id].xp;
  let userlvl = xp[message.author.id].level;
  let nextLvlXp = userlvl * 1000;
  let difference = nextLvlXp - userxp;
  if (message.guild.id === "439643553648476160") return message.channel.send("I have been instructed not to send Level-Up messages in this discord!");
  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0263ff")
  .addField("Level", userlvl, true)
  .addField("XP", userxp, true)
  .setFooter(`Version 1.0.5 BETA | Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL);

  message.channel.send(lvlEmbed)
}

module.exports.help = {
  name: "level"
}