const { MessageEmbed } = require('discord.js');
const { color, footer, pfp } = require('../../config.json');

module.exports.run = async (bot, message) => {

const embed = new MessageEmbed()
    .setTitle(`Autismo 9000's Commands`)
    .addFields(
      {
        name: '.serverAnal',
        value: 'All of the commands combined... Except ban and kick so everyone can see your power.',
        inline: true
      },
      {
        name: '.massChannels',
        value: 'Fill the server with new channels, and also ping everyone inside of them!',
        inline: true
      },
      {
        name: '.nukeChannels',
        value: 'Delete all of teh channels!!',
        inline: true
      },
      {
        name: '.massRoles',
        value: 'Fill the server with roles!',
        inline: true
      },
      {
        name: '.nukeRoles',
        value: 'Delete every role inside of the Dicord server!',
        inline: true
      },
      {
        name: '.banAll',
        value: 'Ban every single member inside the Discord!',
        inline: true
      },
      {
        name: '.kickAll',
        value: 'Kick every single member inside the Discord!',
        inline: true
      },
      {
        name: '.nukeEmojis',
        value: 'Delete all of the emojis in the server!',
        inline: true
      },
      {
        name: '.guildInfo',
        value: 'Check out all the information of a guild before you nuke it!',
        inline: true
      }
    )
    .setColor(color)
    .setFooter(footer, pfp)
    .setTimestamp();
  message.reply(embed);

}

module.exports.config = {
    name: 'help',
    description: 'Displays all of the commands available',
    usage: '.help',
    accessableby: 'Members',
    aliases: []
  };