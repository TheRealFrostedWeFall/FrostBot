const Discord = require("discord.js");
const filterLevels = ['Off', 'No Role', 'Everyone'];
const verificationLevels = ['No Verification', 'Low', 'Medium', '(╯°□°）╯︵ ┻━┻', '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'];

module.exports.run = async (bot, msg, args) => {
    let sicon = msg.guild.iconURL;
	const serverinfoembed = new Discord.RichEmbed()
			.setColor("#0263ff")
			.setThumbnail(sicon)
			.addField('❯ Name', msg.guild.name, true)
			.addField('❯ ID', msg.guild.id, true)
			.addField('❯ Region', msg.guild.region.toUpperCase(), true)
			.addField('❯ Creation Date', msg.guild.createdAt.toDateString(), true)
			.addField('❯ Explicit Filter', filterLevels[msg.guild.explicitContentFilter], true)
			.addField('❯ Verification Level', verificationLevels[msg.guild.verificationLevel], true)
			.addField('❯ Owner', msg.guild.owner.user.tag, true)
			.addField('❯ Members', msg.guild.memberCount, true)
			.addField('❯ Roles', msg.guild.roles.size, true)
			.addField('❯ Channels', msg.guild.channels.size, true);

    return msg.channel.send(serverinfoembed);

}
  
  
  
  module.exports.help = {
  name: "server"
}