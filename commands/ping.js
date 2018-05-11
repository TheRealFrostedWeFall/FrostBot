const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let pingembed = new Discord.RichEmbed()
      .setDescription("🎉")
      .setColor("#0263ff")
      .addField(`${Date.now() - (message.createdTimestamp)}ms`, "Roundtrip and Response <a:customloading:439644282828226571>")
      .addField(`${Math.round(bot.ping)}ms`, "API ping <:ablobthumbsup:439644016246521857>")
      .setFooter(`Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL);
      
      return message.channel.send(pingembed);
        
    }
  
  
  
  module.exports.help = {
  name: "ping"
}