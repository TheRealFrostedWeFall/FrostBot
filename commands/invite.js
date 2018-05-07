const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
    let bicon = bot.user.displayAvatarURL;
    let inviteembed = new Discord.RichEmbed()
    .setDescription("Adopt Frost!")
    .setThumbnail(bicon)
    .setColor("#0263ff")
    .addField("Adopt Frost", `Click the link below`)
    .addField("https://discordapp.com/oauth2/authorize?client_id=434159357434003456&permissions=268528711&scope=bot", `Be sure to vote for the bot too`)
    .addField("Vote Link Below", "https://discordbots.org/bot/434159357434003456/vote")
    .addField("FrostBot Support Discord", "https://discord.gg/DuKqq5r")
    .setFooter(`Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL);
  
  message.channel.send(inviteembed);
}
  
  module.exports.help = {
  name: "invite"
}