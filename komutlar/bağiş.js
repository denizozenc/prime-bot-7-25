const Discord = require('discord.js');

exports.run = (client, message, args) => {
message.channel.send("`Eklenicek.")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yaz'],
  permLevel: 0
};

exports.help = {
  name: 'bağış',
  description: 'Bota bağış yapmak için ',
  usage: 'bağış'
};
