const Discord = require('discord.js');
exports.run = function(client, message, args) {



    const ip = new Discord.MessageEmbed()
    .addField(["\<a:mc:838757491424624700> mc.storikanw.net  \<a:mc:838757491424624700>","\<a:mc:838757491424624700> oyna.storikanw.net \<a:mc:838757491424624700>"],"\<a:mc:838757491424624700> **play.storikanw.net** \<a:mc:838757491424624700>")
    .setColor("BLUE")
    return message.channel.send(ip);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ip',
  description: 'Çekiliş yapar.',
  usage: 'çekilişyap'
};