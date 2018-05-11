module.exports.run = async (bot, message, args) => {
  if (guilds[message.guild.id].skippers.indexOf(message.author.id) === -1) {
            guilds[message.guild.id].skippers.push(message.author.id);
            guilds[message.guild.id].skipReq++;
            if (guilds[message.guild.id].skipReq >= Math.ceil((guilds[message.guild.id].voiceChannel.members.size - 1) / 2)) {
                skip_song(message);
                message.channel.send("Okay, Your skip has been acknowledged. Skipping now!");
            } else {
                message.channel.send("**To Skip the current song I require**" + Math.ceil((guilds[message.guild.id].voiceChannel.members.size - 1) / 2) - guilds[message.guild.id].skipReq) = "** more votes. <:Themadman:433793751756963854>";
            }
        } else {
            message.channel.send("<:ablobping:441426590216355850> You have already voted to Skip this current song.");
        }
}
  


  module.exports.help = {
  name: "skip"
}