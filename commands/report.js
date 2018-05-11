const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const rUser = await message.guild.fetchMember(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Invalid user");
    let reason  = args.join(" ").slice(22);
    if(!reason) return message.channel.send("You must specify a reason to report this player")
    let reportembed = new Discord.RichEmbed()
    .setDescription("Report A User")
    .setColor("#0263ff")
    .addField("Reported User", `${rUser}`)
    .addField("Reported By", `${message.author}`)
    .addField("Channel", message.channel)
    .addField("TimeStamp", message.createdAt)
    .addField("Reason", reason)
    .setFooter(`Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarUR);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find appropriate reports channel!");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportembed);
  }
  
  
  
  module.exports.help = {
  name: "report"
}