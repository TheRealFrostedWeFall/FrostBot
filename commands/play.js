
module.exports.run = (bot, message, args, prefix, guilds, add_to_queue, fetchVideoInfo, isPlaying, videoInfo, playMusic, getID) => {
  if (message.member.voidceChannel || guilds[message.guild.id].voiceChannel != null) {
            if (guilds[message.guild.id].queue.length > 0 || guilds[message.guild.id].isPlaying) {
                getID(args, function(id) {
                    add_to_queue(id, message);
                    fetchVideoInfo(id, function(err, vifeoInfo) {
                        if (err) throw new Error(err);
                        message.channel.send("Added song to queue: **" + videoInfo.title + "**");
                        guilds[message.guild.id].queueNames.push(videoInfo.title);
                    });
                });
            } else {
                isPlaying = true;
                getID(args, function(id) {
                    guilds[message.guild.id].queue.push(id);
                    playMusic(id, message);
                    fetchVideoInfo(id, function(err, videoInfo) {
                        if (err) throw new Error(err);
                        guilds[message.guild.id].queueNames.push(videoInfo.title);
                        message.channel.send("<a:coolpartyblob:439667713506279425> Now Playing: **" + videoInfo.title + "**");
                    });
                });
            }
        } else {
            message.channel.send("You must be in a voice channel to execute music commands <:blep:443956436884783124>");
        }
}



  module.exports.help = {
  name: "play"
}