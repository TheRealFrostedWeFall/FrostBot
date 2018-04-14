const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers and watching ${bot.users.size} users!`);
  bot.user.setActivity(`over ${bot.guilds.size} guilds! | ~help`, {type: "WATCHING"});

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
      let pingembed = new Discord.RichEmbed()
      .setDescription("🎉")
      .setColor("#42f4e5")
      .addField(`${Date.now() - (message.createdTimestamp)}ms`, "Roundtrip and Response ↪")
      .addField(`${Math.round(bot.ping)}ms`, "API ping 🏓");
      
      return message.channel.send(pingembed);
        
    }

   if(cmd === `${prefix}info`){


    let infoembed = new Discord.RichEmbed()
    .setTitle("FrostBot Information")
    .setDescription("Here is some information about me! ^-^")
    .setColor("#42f4e5")
    .addField("Bot Name", bot.user.username)
    .addField("Bot Creator", botconfig.author)
    .addField("Bot Version", botconfig.version)
    .addField(`${Date.now() - (message.createdTimestamp)}ms`, "Roundtrip and Response ↪")
    .addField(`${Math.round(bot.ping)}ms`, "API ping 🏓");     

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
      .addField("~report [<user>] [<reason>]", "Reports a player")
      .addField("~kick [<user>] [<reason>]", "Kicks a player from the guild")
      .addField("~creator", "Whos the creator of Frost?");    

      return message.channel.send(botembed);

    }

   if(cmd === `${prefix}guildinfo`){

    let sicon = message.guild.iconURL;
    let serverinfoembed = new Discord.RichEmbed()
    .setTitle("Server Information")
    .setDescription("Some information about the current guild!")
    .setThumbnail(sicon)
    .setColor("#42f4e5")    
    .addField("Guild Name", message.guild.name)
    .addField("Guild Member Count", message.guild.memberCount)
    .addField("Guild Created On", message.guild.createdAt)
    .addField("You Joined this Guild at", message.member.joinedAt);

    return message.channel.send(serverinfoembed);

}

  if(cmd === `${prefix}report`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Invalid user");
    let reason  = args.join(" ").slice(22);
    if(!reason) return message.channel.send("You must specify a reason to report this player")
    let reportembed = new Discord.RichEmbed()
    .setDescription("Report A User")
    .setColor("#42f4e5")
    .addField("Reported User", `${rUser}`)
    .addField("Reported By", `${message.author}`)
    .addField("Channel", message.channel)
    .addField("TimeStamp", message.createdAt)
    .addField("Reason", reason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find appropriate reports channel!");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportembed);
  }
   if(cmd === `${prefix}kick`){

      message.delete().catch(O_o=>{});
      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      
      
      let kickreason  = args.join(" ").slice(22);
      if(!kUser) return message.channel.send("You must specify a user!");
      if(!kUser.kickable) return message.channel.send("❌ The bot has no permissions to kick this player");
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("🤔 You do not have the required permissions to kick this user!");
      if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
      if(!kickreason) return message.channel.send("You must specify a reason to kick this player");


      message.channel.send(`✅ ${kUser} has been kicked from the guild for ${kickreason}`);
      message.guild.member(kUser).kick(kickreason);
   }
});


  

bot.login(botconfig.token);




