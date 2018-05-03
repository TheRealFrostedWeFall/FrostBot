const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
    let bicon = bot.user.displayAvatarURL;
    let supportembed = new Discord.RichEmbed()
    .setDescription("Adopt Frost!")
    .setThumbnail(bicon)
    .setColor("#0263ff")
    .addField("FrostBot Support Discord", `Click the link below`, true)
    .addField("FrostBot Support Discord", "https://discord.gg/DuKqq5r", true)
    .addField("If you need any more support be sure to message FrostedWeFall on Discord", "FrostedWeFall#8609", true)
    .setFooter(`Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL);
  
  message.channel.send(supportembed);
}
  
  module.exports.help = {
  name: "support"
}