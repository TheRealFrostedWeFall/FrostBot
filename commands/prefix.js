const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = (bot, message, args, prefix) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")){
    return message.reply("You do not have the required permissions to change the prefix!");
  }
  if(!args[0] || args[0 == "help"]) return message.reply(`Usage: ${prefix}prefix <desired prefix here>`);
  
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#0263ff")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]} <a:partyblob:439667690550853632>`)
  .setFooter(`Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL);

  message.channel.send(`${message.author.username} Set my prefix to ${args[0]}`);

}

module.exports.help = {
  name: "prefix"
}