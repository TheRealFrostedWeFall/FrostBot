const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 return message.channel.send (`I'm using **${~~(process.memoryUsage().heapUsed / 1024 / 1024)}mb** of RAM`);
}

module.exports.help = {
  name: "memoryusage"
}