const { MessageEmbed } = require('discord.js');
const { color, footer, pfp } = require('../../config.json');
const { red, green } = require('chalk');

module.exports.run = async (bot, message) => {
       // Begin mass ping
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) {
        return console.log(red('Mass Ping - Missing Administrator'))
    }
    else {
      let args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');
      if (!argresult) {
        console.log(red('Mass Ping - Missing Arguements'))
        return message.channel.send('Did not provid valid args \n .massPing [Your Message]')
      }
      setInterval(function () {
        message.guild.channels.cache.filter((c) => c.type === "text").forEach(ch =>{ch.send('@everyone ' + argresult)})     
      }), 4000
    }
    message.delete();
  }

module.exports.config = {
    name: 'massping',
    description: 'Mass ping everyone in the server',
    usage: '.massping',
    accessableby: 'Members',
    aliases: []
  };