const Discord = require('discord.js');
const { stripIndents, oneLine } = require('common-tags');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setAuthor('BİLGİ')
  .setColor(3447003)
  .setDescription(`Yapımcı : DenizPrime \n\n\ İnternet Sitesi :Eklenicek \n\n\ Komutların Hepsini Görmek İçin : p!yardım \n\n\ Botu Sunucunuza Eklmek İçin : https://discordapp.com/oauth2/authorize?client_id=447130194180964353&scope=bot&permissions=2146958591\n\n\ Destek Sunucusu : https://discord.gg/UXCbAtf \n\n\ Bağış Barkodu : Eklenicek `)
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot hakkında bilgi verir.',
  usage: 'bilgi'
};
