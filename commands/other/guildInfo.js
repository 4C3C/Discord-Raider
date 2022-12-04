const { MessageEmbed } = require ('discord.js');
const { color, footer, pfp } = require('../../config.json');
module.exports.run = async (bot, message) => {
    const embed = new MessageEmbed()
    .setTitle(`${message.guild.name}'s Info [${message.guild.id}]`)
    .addFields(
		{ name: `Owner:`, value: `${message.guild.owner}`, inline: true },
        { name: `Region:`, value: `${message.guild.region}`, inline: true },
        { name: `Emojis:`, value: `${message.guild.emojis.cache.size}`, inline: true },
        { name: `Member Count:`, value: `${message.guild.members.cache.size}`, inline: true },
        { name: `Role Count:`, value: `${message.guild.roles.cache.size}`, inline: true },
        { name: `Channel Count:`, value: `${message.guild.channels.cache.filter(channel => channel.type === 'text').size}`, inline: true }
        )
    .setColor(color)
    .setFooter(footer, pfp)
    .setTimestamp();
    message.reply(embed);
}

module.exports.config = {
    name: 'guildinfo',
    description: 'Check the reponse time of the bot',
    usage: '.guildinfo',
    accessableby: 'Members',
    aliases: ['serverinfo']
  };