const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  message.channel.send('Eventler Her Akşam saat 20.30 da olmaktadır iyi oyunlar')
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'event',
  description: 'api',
  usage: 'örnek'
};