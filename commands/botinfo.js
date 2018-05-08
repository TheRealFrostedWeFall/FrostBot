const Discord = require("discord.js");
const pack = require("../package.json");
var upSecs = 0;
var upMins = 0;
var upHours = 0;
var upDays = 0;
//(◕ ◡ ◕)

	setInterval(function() {
		upSecs = upSecs + 1
		if (upSecs >= 60) {
			upSecs = 0
			upMins = upMins + 1
		}
		if (upMins >= 60) {
			upMins = 0
			upHours = upHours + 1
		}
		if (upHours >= 24) {
			upHours = 0
			upDays = upDays + 1

		}


	}, 1000)

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    let infoembed = new Discord.RichEmbed()
    .setTitle("FrostBot Information")
    .setDescription("Here is some information about me! ^-^")
    .setThumbnail(bicon)
    .setColor("#0263ff")
    .addField("Bot Name", bot.user.username)
    .addField("Bot Creator", "FrostedWeFall#8609")
    .addField("Bot Version", `${pack.version}`)
    .addField("Discord.js Version", `11.3.2 <:js:439652573910401024>`)
    .addField("Discord Bots List API Version","2.0.1")
    .addField("Bot Uptime",`${upDays} Days | ${upHours} Hours | ${upMins} Minutes | ${upSecs} Seconds!`)
    .addField("Total Guilds", `${bot.guilds.size}`)
    .setFooter(`Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL);
    const info = [
            '__About **King**__',
            '',
            'King is a multipurpose discord bot with exciting features!',
            '',
            `• is in **${client.guilds.size}** guilds.`,
            `• is monitoring **${client.channels.size}** channels.`,
            `• is playing with **${client.users.size}** other users.`,
            `• is running Node.js version **${process.version}**.`,
            `• is running Discord.js version **${require('discord.js').version}.**`,
            `• is looking for new users! Use \`;help\` to find out how you can use Sky.`
        ].join('\n');
        message.channel.send(botinfo);
   


   }
  
  
  
  module.exports.help = {
  name: "botinfo"
}