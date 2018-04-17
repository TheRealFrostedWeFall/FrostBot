const Discord = require("discord.js");
let shards = require("../shards.json");

module.exports.run = async (bot, message, args) => {
 
  if(!shards[message.author.id]){
    shards[message.author.id] = {
      shards: 0
    };
  }

  let uShards = shards[message.author.id].shards;

  let shardicon = bot.user.displayAvatarURL;
  let shardEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .setThumbnail(shardicon)
  .addField(uShards, "Shards 💍")
  .addField("Gain more shards by talking more in chat!")
  .setFooter("Version 1.0.5 BETA");

  message.channel.send(shardEmbed).then(msg => {msg.delete(8000)});

}

module.exports.help = {
  name: "shards"
}