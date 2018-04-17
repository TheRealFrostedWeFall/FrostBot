const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let botembed = new Discord.RichEmbed()
      .setTitle("FrostBot Help Commands")
      .setDescription("Need some help with FrostBot?")
      .setColor("#42f4e5")
      .addField("~help", "Sends this message ^-^")
      .addField("~ping", "Shows the clientside and roundtrip ping")
      .addField("~botinfo", "Gives you some Information about the bot")
      .addField("~guildinfo", "Gives you some Information about the current Guild")
      .addField("~report [<user>] [<reason>]", "Reports a player")
      .addField("~kick [<user>] [<reason>]", "Kicks a player from the guild")
      .addField("~warn [<user>] [<reason>]", "Warns a specific player inside the guild")
      .addField("~ban [<user>] [<reason>]", "Bansa player from the guild")
      .addField("~purge [<integer]", "Purges a set amount of lines in the desired channel")
      .addField("~say [<string>]", "Repeats what you said back to you");
      

      return message.channel.send(botembed);

    }
  
  
  
  module.exports.help = {
  name: "help"
}