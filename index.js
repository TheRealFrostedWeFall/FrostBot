const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


bot.on("ready", async () => {
   console.log(`${bot.user.username} is online!`);
   bot.user.setGame("Inazuma Eleven Firestorm!!");
});
bot.on("message", async message => {
   if(message.author.bot) return;
   if(message.channel.type === "dm") return;

   let prefix  = botconfig.prefix;
   let messageArray = message.content.split(" ");
   let cmd = messageArray[0];
   let args = messageArray.slice(1);

   if(cmd === `${prefix}creator`){

   	return message.channel.send("FrostedWeFall is my creator :wink:");
   }

   if(cmd === `${prefix}donate`){

    return message.channel.send("Please be sure to donate to help support development of FrostBot **Donation link will be shown here**");
  }

   if(cmd === `${prefix}ping`) {
      const m = await message.channel.send(`Oof! (  **???**  |  **???**  ) \\🏓`);
      m.edit(`**Oof!** (  **${message.createdTimestamp - message.createdTimestamp}ms** roundtrip/response  |  **${Math.round(bot.ping)}ms** API heartbeat  ) \\🏓`);
    }

   if(cmd === `${prefix}info`){


    let infoembed = new Discord.RichEmbed()
    .setTitle("FrostBot Information")
   	.setDescription("Here is some information about me! ^-^")
   	.setColor("#42f4e5")
   	.addField("Bot Name", bot.user.username)
   	.addField("Bot Creator", botconfig.author)
    .addField("Bot Version", botconfig.version);

   	return message.channel.send(infoembed);

   }

    if(cmd === `${prefix}help`){
      let botembed = new Discord.RichEmbed()
    	.setTitle("FrostBot Help Commands")
    	.setDescription("Need some help with FrostBot?")
    	.setColor("#42f4e5")
    	.addField("~help", "Sends this message ^-^")
    	.addField("~ping", "Shows the clientside and roundtrip ping")
    	.addField("~info", "Gives you some Information about the bot")
      .addField("~guildinfo", "Gives you some Information about the current Guild")
      .addField("~donate", "Donate to help support development of FrostBot")
      .addField("~creator", "Whos the creator of Frost?");    

    	return message.channel.send(botembed);

    }

   if(cmd === `${prefix}guildinfo`){

    let sicon = message.guild.iconURL;
    let serverinfoembed = new Discord.RichEmbed()
    .setTitle("Server Information")
    .setDescription("Some information about the current guild!")
    .setThumbnail(sicon)
    .addField("Guild Name", message.guild.name)
    .addField("Guild Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Guild Member Count", message.guild.memberCount);

    return message.channel.send(serverinfoembed);


  }

});
	

bot.login(botconfig.token);