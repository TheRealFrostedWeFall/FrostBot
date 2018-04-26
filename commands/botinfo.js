const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    let infoembed = new Discord.RichEmbed()
    .setTitle("FrostBot Information")
    .setDescription("Here is some information about me! ^-^")
    .setThumbnail(bicon)
    .setColor("#0263ff")
    .addField("Bot Name", bot.user.username)
    .addField("Bot Creator", "FrostedWeFall#8609")
    .addField("Bot Version", "V1.0.4")
    .addField("Discord.js Version", "^11.3.2")
    .addField("Total Guilds", `${bot.guilds.size}`)
    .setFooter(`Version 1.0.5 BETA | Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL);

   

    return message.channel.send(infoembed);

   }
  
  
  
  module.exports.help = {
  name: "botinfo"
}