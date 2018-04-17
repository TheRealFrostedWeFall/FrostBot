const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
    let serverinfoembed = new Discord.RichEmbed()
    .setTitle("Server Information")
    .setDescription("Some information about the current guild!")
    .setThumbnail(sicon)
    .setColor("#42f4e5")    
    .addField("Guild Name", message.guild.name)
    .addField("Guild Member Count", message.guild.memberCount)
    .addField("Guild Created On", message.guild.createdAt)
    .addField("You Joined this Guild at", message.member.joinedAt)
    .setFooter("Version 1.0.5 BETA");

    return message.channel.send(serverinfoembed);

}
  
  
  
  module.exports.help = {
  name: "guildinfo"
}