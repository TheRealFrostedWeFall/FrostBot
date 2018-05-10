module.exports = {
    run: async (bot, message, args) => {
        if(message.author.id !== '315524485501550594') return message.channel.send ("<:BlobBanned:439644067211771905> Feck off, Your abuse has been sent to FrostedWeFall#8609");
        if (!args[0]) return message.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${bot.config.prefix + module.exports.meta.aliases[0] + ' ' + module.exports.meta.usage}\`\`\``);
        require('child_process').exec(args.join(' '), (error, stdout, stderr) => {
            if (error) {
                message.channel.send(error);
                return console.error(error);
            }
            message.channel.send(stdout.slice(0, 1500), { code: 'js' });
        });
    },
    meta: {
        aliases: ['exec'],
        ownerOnly: true,
        description: 'Executes a terminal command through the bot.',
        usage: '<%command%>'
    }
}

  module.exports.help = {
  name: "execute"
}
