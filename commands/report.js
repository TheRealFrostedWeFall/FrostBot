const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const rUser = await message.guild.fetchMember(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Invalid user");
    let reason  = args.join(" ").slice(22);
    if(!reason) return message.channel.send("You must specify a reason to report this player")
    let reportembed = new Discord.RichEmbed()
    .setDescription("Report A User")
    .setColor("#0263ff")
    .addField("Reported User", `${rUser}`, true)
    .addField("Reported By", `${message.author}`, true)
    .addField("Channel", message.channel, true)
    .addField("TimeStamp", message.createdAt, true)
    .addField("Reason", reason, true)
    .setFooter(`Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL, true);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send(`Couldn't find appropriate reports channel! Please make a channel called __**reports**__`);

    message.delete().catch(O_o=>{});
    message.channel.send("\\✅ Player has successfully been reported and sent to #reports!")
    reportschannel.send(reportembed);
  }
  
  
  
  module.exports.help = {
  name: "report"
}