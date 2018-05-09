const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("❌ You do not have the correct permissions to execute this command. You require the permission - MANAGE_ROLES in this guild! <:Themadman:433793751756963854>");
  if(args[0] == "help"){
    message.reply("Usage: ~removerole <user> <role> <:Themadman:433793751756963854> <:Themadman:433793751756963854>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("❌ The user you have specified can not be found, please try again later with a valid username! <:Themadman:433793751756963854>");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send(`❌ Error: ${args[1]} Role Can not be found! Please make sure you have specified a valid role! <:Themadman:433793751756963854>`);
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("❌ Error: Please make sure you have specified a valid role! <:Themadman:433793751756963854>");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("❌ The user you have speified does not currently have that role! <:Themadman:433793751756963854>");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`❌ You have been removed from the ${gRole.name} role in ${message.guild.name} ID: ${message.guild.id}. <:Themadman:433793751756963854>`)
  }catch(e){
    return message.channel.send(`<@${rMember.id}>, We removed ${gRole.name} from them however their DM's must be locked as I can not message them! <:Themadman:433793751756963854>`)
  }
}

module.exports.help = {
  name: "removerole"
}