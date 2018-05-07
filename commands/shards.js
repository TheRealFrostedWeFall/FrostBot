const Discord = require("discord.js");
let shards = require("../shards.json");

module.exports.run = async (bot, message, args) => {
 
  if(!shards[message.author.id]){
    shards[message.author.id] = {
      shards: 0
    };
  }

  let userShards = shards[message.author.id].shards;

  let shardicon = message.author.displayAvatarURL
  let shardEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0263ff")
  .setThumbnail(shardicon)
  .addField( "Shards 💍", userShards)
  .addField("Gain more shards", "by talking more in chat!")
  .setFooter(`Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL);

  message.channel.send(shardEmbed)

}

module.exports.help = {
  name: "shards"
}