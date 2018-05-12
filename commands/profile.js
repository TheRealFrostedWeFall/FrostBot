const Discord = require("discord.js");
const botconfig = require("../botconfig");
let xp = require("../xp.json");
let coins = require("../coins.json");
module.exports.run = async (bot, message, args, userCoins, coins) => {

  if(!xp[message.author.id]){
   message.channel.send(`<a:customloading:439644282828226571> Created New profile for user ${message.author.id}. Please retype ~profile`);    
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}
  
  let uicon = message.author.displayAvatarURL;
  let userxp = xp[message.author.id].xp;
  let userlvl = xp[message.author.id].level;
  let nextLvlXp = userlvl * 1000;
  let difference = nextLvlXp - userxp;
  if(message.author.id !== '315524485501550594') return message.channel.send ("<:toohappy:443956536486789131> As this command is still in development, It is limited to FrostedWeFall#8609 Only");
  let profileEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username}'s Profile`)
  .setDescription(`${message.author.username} has not yet set a bio <:rejected:436824567898570763>`)
  .setColor("#0263ff")
  .setThumbnail(uicon)
  .addField("Global Level <:toohappy:443957306263076866>", userlvl, true)
  .addField("Total Experience <:blep:443957351490256896>", userxp, true)
  .addField("Total Coins 📀", userCoins, true)
  .setFooter(`${difference}XP Till you level up to Level ${userlvl + 1}`, message.author.displayAvatarURL);
  const mess = await message.channel.send(`<a:customloading:439644282828226571> Loading Profile of user ${message.author.id}`);
  mess.edit(profileEmbed);                    
  }


module.exports.help = {
  name: "profile"
}