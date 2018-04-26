const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let pingembed = new Discord.RichEmbed()
      .setDescription("🎉")
      .setColor("#0263ff")
      .addField(`${Date.now() - (message.createdTimestamp)}ms`, "Roundtrip and Response ↪")
      .addField(`${Math.round(bot.ping)}ms`, "API ping 🏓")
      .setFooter(`Version 1.0.5 BETA | Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL);
      
      return message.channel.send(pingembed);
        
    }
  
  
  
  module.exports.help = {
  name: "ping"
}