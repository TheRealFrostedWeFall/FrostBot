const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 300)
      return message.reply("❌ Please provide a valid number between 2 and 300 for the number of messages to be deleted in this channel!");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ You do not have the required permissions to purge text in this channel and / or guild!");
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
    message.channel.send(`✅ Successfully purged ${deleteCount} messages!`)
      .catch(error => message.reply(`❌ Couldn't delete messages because of: ${error}`));
  }
  
  
  
  module.exports.help = {
  name: "purge"
}