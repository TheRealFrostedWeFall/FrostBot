module.exports = {
    run: async (client, msg, args) => {
        if(msg.author.id !== '315524485501550594') return msg.channel.send ("Feck off, Your abuse has been sent to FrostedWeFall#8609");
        function clean(text) {
            if (typeof(text) === 'string') {
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            } else {
                return text;
            }
        }
        try {
            const code = args.join(' ');
            let evaled = eval(code);
            if (typeof evaled !== 'string') {
                evaled = require('util').inspect(evaled);
            }
            msg.channel.send(clean(evaled), {code:'xl'});
        } catch (err) {
            msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    },
    meta: {
        aliases: ['eval', 'ev'],
        ownerOnly: true,
        description: 'Evaluates raw Javascript.',
        usage: '<%expression%>'
    }
}

  module.exports.help = {
  name: "eval"
}