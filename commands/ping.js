const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let pingembed = new Discord.RichEmbed()
      .setDescription("🎉")
      .setColor("#42f4e5")
      .addField(`${Date.now() - (message.createdTimestamp)}ms`, "Roundtrip and Response ↪")
      .addField(`${Math.round(bot.ping)}ms`, "API ping 🏓")
      .setFooter("Version 1.0.5 BETA");
      
      return message.channel.send(pingembed);
        
    }
  
  
  
  module.exports.help = {
  name: "ping"
}