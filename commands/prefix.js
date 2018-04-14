const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("🤔 You do not have the required permissions to change the bot prefix on this server!");
  if(!args[0] || args[0 == "help"]) return message.reply(`Usage: ${prefix}prefix [<new prefix>]`);

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let PrefixEmbed = new Discord.RichEmbed()
  .setColor("#42f4e5")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(PrefixEmbed);

}

module.exports.help = {
  name: "prefix"
}