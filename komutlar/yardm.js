const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

  let pages = ['**Komutlar**\n\nk!afk = Afk Olursunuz.  \np!yardım = BOT Komutlarını Atar. \np!ping = BOTun Pingini Gösterir. \np!istatistik = BOT İstatistiklerini Atar.', '**Komutlar 2**\n\np!ban = Ban Atar. \np!banaç = Banı Açar. \np!bilgi = Bot Hakkında Bilgi Verir. \np!davet = Botu Davet Eder ! \np!duyuru = Bot Duyuru Yapar. \np!istatistik = İstatistikleri Gösterir. \np!kick  = İstediğiniz Kişiyi Sunucudan Atar. \np!kullanıcıbilgim = Kullanıcı Bilgini Gösterir. \n', '**Komutlar 3**\n\np!oylama = Oylama Yapar \np!ping = Botun Pingini Gösterir. \np!rol-ver = İstediginiz Kişiye Rol Verir. \np!ses-kanal-aç = Ses Kanalı Açar. \np!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \np!sunucubilgi = Sunucu Bilsigini Gösterir. \np!tavsiye = Tavsiye Verir. \np!temizle = Mesajları Siler', '**Komutlar 4**\n\np!uyar = Kişiyi Uyarırsınız. \np!yazı-kanalı-aç = Yazı Kanalı Açar . \np!yenilikler = Yeniliklerlen Haberdar Olursunuz. \np!saat = Türkiye Saatini Gösterir \np!ascii = Yaz Ve Gör :) \np!Atam = Değer Ve Kalbimizde Taşıdığımız Atamız <3 \np!sunucuresmi = Sunucunuzun Resmini Gösterir. \np!çekiliş = Çekiliş Yapar. \np!çayiç = Çay İçer. \np!çekiç = Birisine Çekiç Atar. \np!yapımcım = Yapımcıyı Gösterir. \np!ateşet = Ateş Eder :)', '**Komutlar 5** \n\np!atla = Atlarsınız \np!şelale = Şelale Gifi Gösterir \np!wtf = Yorumsuz \np!havadurumu = İstediginiz Şehrin Hava Durumunu Gösterir \np!kullanıcı-ara = İstediginiz İsimle Kullanıcı Arar \np!hedef = Hedefimizi Gösterir ']; // Sayfalar
  let page = 1; // Sayfa 1

  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter(`Sayfa ${page} / ${pages.length}`, "https://cdn.discordapp.com/attachments/438332483386212352/450680514404155403/image.png")
  .setDescription(pages[page-1])
  .setAuthor("Prime", "https://cdn.discordapp.com/attachments/438332483386212352/450680514404155403/image.png")

  message.channel.send(embed).then(msg => {

    msg.react('⬅').then(r => {
      msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir.',
usage: 'yardım'
};