const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      message.delete().catch(O_o=>{});
      let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      
      
      let banreason  = args.join(" ").slice(22);
      if(!bUser) return message.channel.send("❌ You must specify a user!");
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("🤔 You do not have the required permissions to ban this user!");
      if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("❌ That person can't be banned!");
      if(!banreason) return message.channel.send("❌ You must specify a reason to ban this player");


      message.channel.send(`✅ ${bUser} has been banned for ${banreason}`);
      message.guild.member(bUser).ban(banreason);
    }


module.exports.help = {
  name: "ban"
}