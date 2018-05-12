module.exports = {
    run: async (bot, msg, args) => {
        if (!args[0]) msg.channel.send('\\❌ Please provide a command name to reload.');
        if(msg.author.id !== '315524485501550594') msg.channel.send ("<:Themadman:433793751756963854> You may not execute this command, It is limited to Developers only!");
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        msg.channel.send(`\\✅ Reloading command \`${args[0]}\` This may take a while. <:Themadman:433793751756963854>`);
        console.log(`INFO: Currently reloading command ${args[0]}.`);
    }
}

  module.exports.help = {
  name: "reload"
}
