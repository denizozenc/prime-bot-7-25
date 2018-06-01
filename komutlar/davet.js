const Discord = require('discord.js');

exports.run = (client, message, args) => {

  const yaz = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("https://discordapp.com/oauth2/authorize?client_id=447130194180964353&scope=bot&permissions=2146958591");
  message.channel.sendEmbed(yaz)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet',"invite"],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini atar',
  usage: 'davet'
};
