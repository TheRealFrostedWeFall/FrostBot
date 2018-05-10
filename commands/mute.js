const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
    return message.channel.send("<:blobglaring:398078130973179924> You do not have the required permissions to use this command!");
  }
  if(!tomute) {
    return message.channel.send(`<:blobglaring:398078130973179924> I can't find the user ${args[0]}! ¯\_(ツ)_/¯`);
  }
  if(tomute.hasPermission("MANAGE_MESSAGES")){
    return message.reply("<:bloblol:430032405324234753> Sorrry I can not mute this user!");
  }
  let muterole = message.guild.roles.find(`name`, "muted");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))} <a:coolpartyblob:439667713506279425>`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted! Please make sure you follow the rules to ensure you wont be muted again! <:blobcaptain:389535972599267329>`);
  }, ms(mutetime));

}

module.exports.help = {
  name: "mute"
} 