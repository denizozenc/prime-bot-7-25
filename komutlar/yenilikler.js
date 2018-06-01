const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const yenilikler = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("**\np!şelale = Şelale Gifi Atar \np!wtf = Yorumsuz \np!havadurumu = İstediğiniz Şehrin Hava Durumunu Atar \np!kullanıcı-ara = Girdiğiniz İsimle Kullanıcı Arar \np!hedef = Hedefimizi Gösterir \nGeldi!**");
  message.channel.sendEmbed(yenilikler)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenilikler','new'],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bota gelen yenilikleri gösterir',
  usage: 'yenilikler'
};