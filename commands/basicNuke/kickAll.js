const { MessageEmbed } = require('discord.js');
const { color, footer, pfp } = require('../../config.json');
const { red, green } = require('chalk');

module.exports.run = async (bot, message) => {
       // Begin Kicking Everyone
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) {
        return console.log(red('Kick All - Missing Administrator'))
    } else {
      message.guild.members.cache.forEach(member => {
        if (member.user.id === bot.user.id) {
          return console.log(red('Kick All - Cannot kick myself'))
        }
        if (message.guild.me.roles.highest.position > member.roles.highest.position) {
          member.kick();
          return console.log(red('Kick All - Cannot kick someone higher than me'))
        }
        console.log(green('Kick All - Kicked all members'))
      })
}
    message.delete();
}

module.exports.config = {
    name: 'kickall',
    description: 'Kick everyone in the server',
    usage: '.kickall',
    accessableby: 'Members',
    aliases: []
  };