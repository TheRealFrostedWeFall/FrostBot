const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {     
    message.delete().catch(O_o=>{});
      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      
      
      let kickreason  = args.join(" ").slice(22);
      if(!kUser) return message.channel.send("❌ You must specify a user!");
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("🤔 You do not have the required permissions to kick this user!");
      if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("❌ That person can't be kicked!");
      if(!kickreason) return message.channel.send("❌ You must specify a reason to kick this player");


      message.channel.send(`✅ ${kUser} has been kicked for ${kickreason}`);
      message.guild.member(kUser).kick(kickreason);
    }





module.exports.help = {
  name: "kick"
}