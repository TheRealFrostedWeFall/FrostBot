const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o=>{});
      let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      
      
      let warnreason  = args.join(" ").slice(22);
      if(!wUser) return message.channel.send("❌ You must specify a user!");
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("🤔 You do not have the required permissions to warn this user!");
      if(wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ That person can't be warned!");
      if(!warnreason) return message.channel.send("❌ You must specify a reason to warn this player");


      message.channel.send(`✅ ${wUser} has been warned for ${warnreason}`);
      message.guild.member(wUser).warn(warnreason);


}

module.exports.help = {
  name: "warn"
}