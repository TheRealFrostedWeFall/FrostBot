const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    let infoembed = new Discord.RichEmbed()
    .setTitle("FrostBot Information")
    .setDescription("Here is some information about me! ^-^")
    .setThumbnail(bicon)
    .setColor("#42f4e5")
    .addField("Bot Name", bot.user.username)
    .addField("Bot Creator", "FrostedWeFall#8609")
    .addField("Bot Version", "V1.0.4")
    .addField("Discord.js Version", "^11.3.2")
    .setFooter("Version 1.0.5 BETA");

   

    return message.channel.send(infoembed);

   }
  
  
  
  module.exports.help = {
  name: "botinfo"
}