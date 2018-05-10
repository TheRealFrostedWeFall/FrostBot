exports.run = async (client, message, args, level) => {
  if(message.author.id !== '315524485501550594') message.channel.send ("<:Themadman:433793751756963854> You may not execute this command, It is limited to Developers only!");
  if (!args || args.length < 1) return message.reply("\\❌ Please provide a command name to reload.");

  let response = await client.unloadCommand(args[0]);
  if (response) return message.reply(`Error Unloading: ${response} <:Themadman:433793751756963854>`);

  response = client.loadCommand(args[0]);
  if (response) return message.reply(`Error Loading: ${response} <:Themadman:433793751756963854>`);

  message.channel.send(`\\✅ Reloading command \`${args[0]}\` This may take a while. <:Themadman:433793751756963854>`);
  console.log(`INFO: Currently reloading command ${args[0]}.`);
};




  module.exports.help = {
  name: "reload"
}
