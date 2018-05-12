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
  let uicon = message.author.displayAvatarURL;
  let userxp = xp[message.author.id].xp;
  let userlvl = xp[message.author.id].level;
  let nextLvlXp = userlvl * 1000;
  let difference = nextLvlXp - userxp;
  if (message.guild.id === "439643553648476160") return message.channel.send("I have been instructed not to send Level-Up messages in this discord!");
  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username}'s Level`)
  .setDescription(`${message.author.username}'s current global experience level!`)
  .setColor("#0263ff")
  .setThumbnail(uicon)
  .addField("Current Level 🌐", userlvl, true)
  .addField("Total Experience <:blep:443957351490256896>", `${userxp} XP`, true)
  .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);

  message.channel.send(lvlEmbed)
}

module.exports.help = {
  name: "level"
}