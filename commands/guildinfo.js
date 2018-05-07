const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
    let serverinfoembed = new Discord.RichEmbed()
    .setTitle("Server Information")
    .setDescription("Some information about the current guild!")
    .setThumbnail(sicon)
    .setColor("#0263ff")    
    .addField("Guild Name", message.guild.name)
    .addField("Guild Member Count", message.guild.memberCount)
    .addField("Guild Created On", message.guild.createdAt)
    .addField("You Joined this Guild at", message.member.joinedAt)
    .setFooter(`Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL);

    return message.channel.send(serverinfoembed);

}
  
  
  
  module.exports.help = {
  name: "guildinfo"
}