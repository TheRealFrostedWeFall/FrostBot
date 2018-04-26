exports.run = (client, message, args,) => {
    let statuses = {
      "online": "online",
      "on": "online",
      "invisible": "invisible",
      "offline": "invisible",
      "off": "invisible",
      "invis": "invisible",
      "i": "invisible",
      "dnd": "dnd",
      "idle": "idle"
    };
    if(!args[0]) return message.channel.send(`❌ Invalid Args!  ~status [<status>]`).then(setTimeout(message.delete.bind(message), 1000));
    let status = statuses[args[0].toLowerCase()];
    if(!message.author.id === "315524485501550594"){
      return message.channel.send(`❌ You do not have the correct permission level to execute this command!`)
    }
    if(!status) {
      return message.channel.send(`❌ ${status} isn't a valid status.`).then(setTimeout(message.delete.bind(message), 10000));
    }
    if(status === "on") status = "online";
    if(status === "off") status = "invisible";
    if(status === "i") status = "invisible";
    if(status === "offline") status = "invisible";
  
    client.user.setStatus(status)
    .then(u=> {
      message.channel.send(`✅ Status changed to ${status}`).then(setTimeout(message.delete.bind(message), 5000));
    }).catch(e=> {
      message.channel.send(`❌ Error while changing status to: ${status}\n\`\`\`${e}\`\`\``).then(setTimeout(message.delete.bind(message), 10000));
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["s"],
  permLevel: 0
};

exports.help = {
  name: 'status',
  description: 'Changes the Status of the bot/user',
  usage: 'status [online/invisible/dnd/idle]'
};