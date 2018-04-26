const Discord = require("discord.js");
  
module.exports.run = async (bot, message, args) => {
  let botembed = new Discord.RichEmbed()
      .setTitle("FrostBot Help Commands (◕ ◡ ◕)")
      .setDescription("Need some help with FrostBot?")
      .setColor("#0263ff")
      .addField("~help", "Sends this message ^-^")
      .addField("~ping", "Shows the clientside and roundtrip ping")
      .addField("~botinfo", "Gives you some Information about the bot")
      .addField("~prefix", "Gives you some Information about the bot")
      .addField("~guildinfo", "Gives you some Information about the current Guild")
      .addField("~invite", "Adopt Frost and invite him into your server (◕ ◡ ◕)")
      .addField("~shards", "Shows the amount of coins you have")
      .addField("~level", "Shows the amount of xp you have")
      .addField("~report [<user>] [<reason>]", "Reports a player")
      .addField("~kick [<user>] [<reason>]", "Kicks a player from the guild")
      .addField("~warn [<user>] [<reason>]", "Warns a specific player inside the guild")
      .addField("~ban [<user>] [<reason>]", "Bans a player from the guild")
      .addField("~purge [<integer>]", "Purges a set amount of lines in the desired channel")
      .addField("~say [<string>]", "Repeats what you said back to you")
      .addField("~addrole [<user>] [<role parsed as string>]", "Adds a certain role to a player [ALPHA]")
      .addField("~removerole [<user>] [<role parsed as string>]", "Removes a certain role from a player [ALPHA]")
      .setFooter(`Version 1.0.5 BETA | Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL);
      
      message.channel.send("Help has been sent to your Direct messages! (◕ ◡ ◕)")
      return message.author.send(botembed);
          }
  

  
  module.exports.help = {
  name: "help"
}

   