const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return ("❌ You do not have the correct permissions to execute this command. You require the permission - MANAGE_ROLES in this guild!");
  if (args[0] == "help") {
    message.reply("Usage: ~addrole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return ("❌ The user you have specified can not be found, please try again later with a valid username!")
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("❌ Error: Please make sure you have specified a valid role!");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("❌ Error: I couldn't find the role that you have specified. Please try again!");

  if (rMember.roles.has(gRole.id)) return message.reply("❌ Error: The player already has this role!");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`You have been added / given the role ${gRole.name} in ${message.guild.name} ID: ${message.guild.id}.`)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`<@${rMember.id}> has been given the role ${gRole.name} however we could not DM them as their DM's must be locked! :(`)
  }
}

module.exports.help = {
  name: "addrole"
}