const Discord = require("discord.js");
const fs = require("fs");
let shards = require("../shards.json");

module.exports.run = async (bot, message, args) => {


  if(!shards[message.author.id]){
    return message.reply("You don't have any shards! Earn some by talking in chat! :)")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!shards[pUser.id]){
    shards[pUser.id] = {
      shards: 0
    };
  }

  let pShards = shards[pUser.id].shards;
  let sShards = shards[message.author.id].shards;

  if(sShards < args[0]) return message.reply("Not enough shards there!");

  shards[message.author.id] = {
    shards: sShards - parseInt(args[1])
  };

  shards[pUser.id] = {
    shards: pShards + parseInt(args[1])
  };
  if (!message.guild.id === "439643553648476160") return message.channel.send("❌ This command has been temporarily disabled for development reasons!");
  let pay = new Discord.RichEmbed()
    .setTitle("Shard Transactions")
    .setColor("#0263ff")
    .addField("Sender", message.author)
    .addField("Receiver", pUser)
    .addField("Shards Amount", `${args[1]}`)
    .setFooter(`Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL);

    message.channel.send(pay).then(msg => {msg.delete(25000)});
    console.log(`${message.author} has sent ${pUser} ${args[1]} shards. :ring:`);

  fs.writeFile("./shards.json", JSON.stringify(shards), (err) => {
    if(err) console.log(err)
  });


}

module.exports.help = {
  name: "pay"
}