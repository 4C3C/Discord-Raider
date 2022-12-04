const { red, green } = require('chalk');

module.exports.run = async (bot, message) => {
       // Begin Nuking Emojis
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) {
        return console.log(red('Nuke Emojis - Missing Administrator'))
    } else {
        message.guild.emojis.cache.forEach(e => e.delete());
      }
      console.log(green(`Nuke Emojis - All emojis nuked`))
    message.delete();
}

module.exports.config = {
    name: 'nukeemojis',
    description: 'Nuke all of the emojis in the discord',
    usage: '.nukeemojis',
    accessableby: 'Members',
    aliases: []
  };