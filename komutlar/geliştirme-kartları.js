const Discord = require('discord.js');
const { stripIndents, oneLine } = require('common-tags');
exports.run = (client, message, args) => {
    message.channel.send(stripIndents`
    **Geliştirme Kartları**
    \`\`\`fix
    1- Arduino Geliştirme Kartı
    2- Raspberry Pi Geliştirme Kartı
    3- The BeagleBone Black Geliştirme Kartı
    4- The Intel Galileo Geliştirme Kartı
    5- The pcDuino Geliştirme Kartı
    6- The Uruk Geliştirme Kartı
    7- The Goldilocks Geliştirme Kartı
    8- The ExtraCore Geliştirme Kartı
    9- The SparkCore Geliştirme Kartı
    10- DigiSpark Geliştirme Kartı
    11- Mikrodenetleyici ve Mikroişlemci Tabanlı Kartlar
    \`\`\`
    `)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'geliştirme-kartları',
  description: 'En popüler geliştirme kartlarını gösterir.',
  usage: 'geliştirme-kartları'
};
