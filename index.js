const botconfig = require("./botconfig.json");
const packagejson = require("./package.json");
const watchjson = require("./watch.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});





bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers and watching ${bot.users.size} users!`);
  bot.user.setActivity(`over ${bot.guilds.size} guilds! | ~help  | Watching ${bot.users.size} players!`, {type: "WATCHING"});

});

bot.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} | (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setActivity(`over ${bot.guilds.size} guilds! | ~help  | Watching ${bot.users.size} players!`, {type: "WATCHING"});
});

bot.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`over ${bot.guilds.size} guilds! | ~help  | Watching ${bot.users.size} players!`, {type: "WATCHING"});
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

   if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let infoembed = new Discord.RichEmbed()
    .setTitle("FrostBot Information")
    .setDescription("Here is some information about me! ^-^")
    .setThumbnail(bicon)
    .setColor("#42f4e5")
    .addField("Bot Name", bot.user.username)
    .addField("Bot Creator", packagejson.author)
    .addField("Bot Version", packagejson.version)
    .addField("Discord.js Version", "^11.3.2")
    .addField("Auto Restart Timer", `${watchjson.throttle}ms`);
   

    return message.channel.send(infoembed);

   }

    if(cmd === `${prefix}help`){
      let botembed = new Discord.RichEmbed()
      .setTitle("FrostBot Help Commands")
      .setDescription("Need some help with FrostBot?")
      .setColor("#42f4e5")
      .addField("~help", "Sends this message ^-^")
      .addField("~creator", "Whos the creator of Frost?") 
      .addField("~ping", "Shows the clientside and roundtrip ping")
      .addField("~botinfo", "Gives you some Information about the bot")
      .addField("~guildinfo", "Gives you some Information about the current Guild")
      .addField("~donate", "Donate to help support development of FrostBot")
      .addField("~report [<user>] [<reason>]", "Reports a player")
      .addField("~kick [<user>] [<reason>]", "Kicks a player from the guild")
      .addField("~warn [<user>] [<reason>]", "Warns a specific player inside the guild")
      .addField("~ban [<user>] [<reason>]", "Bansa player from the guild")
      .addField("~purge [<integer]", "Purges a set amount of lines in the desired channel")
      .addField("~say [<string>]", "Repeats what you said back to you");
      

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

    const rUser = await message.guild.fetchMember(message.mentions.users.first() || message.guild.members.get(args[0]));
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

          if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("🤔 It seems you do not have the required permissions");
    if(args[0] == "help"){
      message.reply("Usage: ~kick <user> <reason>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("❌ The user you have specified can not be found");
    let kickreason = args.join(" ").slice(22);
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("🤔 That person can't be kicked!");
    message.delete().catch(O_o=>{});

      message.channel.send(`✅ ${kUser} has been kicked for ${kickreason}`);
      message.guild.member(kUser).warn(kickreason);
   }
   if(cmd === `${prefix}warn`){

      message.delete().catch(O_o=>{});
      let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      
      
      let warnreason  = args.join(" ").slice(22);
      if(!wUser) return message.channel.send("❌ You must specify a user!");
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("🤔 You do not have the required permissions to warn this user!");
      if(wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ That person can't be warned!");
      if(!warnreason) return message.channel.send("❌ You must specify a reason to warn this player");


      message.channel.send(`❌ ${wUser} has been warned for ${warnreason}`);
      message.guild.member(wUser).warn(warnreason);
    }

     if(cmd === `${prefix}ban`){

      message.delete().catch(O_o=>{});
      let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      
      
      let banreason  = args.join(" ").slice(22);
      if(!bUser) return message.channel.send("❌ You must specify a user!");
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("🤔 You do not have the required permissions to ban this user!");
      if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ That person can't be banned!");
      if(!banreason) return message.channel.send("❌ You must specify a reason to ban this player");


      message.channel.send(`✅ ${bUser} has been banned for ${banreason}`);
      message.guild.member(bUser).ban(banreason);
    }

  if(cmd === `${prefix}purge`) {

    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("❌ Please provide a valid number between 2 and 100 for the number of messages to be deleted in this channel!");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ You do not have the required permissions to purge text in this channel and / or guild!");
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
    message.channel.send(`✅ Successfully purged ${deleteCount} messages!`)
      .catch(error => message.reply(`❌ Couldn't delete messages because of: ${error}`));
  }
    if(cmd === `${prefix}say`) {

    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
  });
bot.login(botconfig.token);
