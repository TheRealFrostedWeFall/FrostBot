module.exports = {
    run: async (bot, message, args) => {
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