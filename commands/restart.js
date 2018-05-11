module.exports = {
    run: async (bot, message, args) => {
        if(message.author.id !== '315524485501550594') return message.channel.send ("<:lolcrazy:433787855383560203> oooh you're well 'ard aren't ya");
        console.log(`INFO: ${message.author.username} Just attempted to restart Frost! ID ${message.author.id} in guild ${message.guild.id} | ${message.guild.name}`);
        await message.channel.send('Restarting Frost... **__This may take a while__**');
        process.exit(0);
    },
    meta: {
        aliases: ['restart', 'reboot'],
        ownerOnly: true,
        usage: ''
    }
}
  module.exports.help = {
  name: "restart"
}