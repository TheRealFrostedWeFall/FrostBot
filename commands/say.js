const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send ("❌ Sorry but due to the substantial amount of abuse with this command it has been limited to players with the following permission: 'MANAGE_MESSAGES'");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
  
  
  
  module.exports.help = {
  name: "say"
}