const { red, green } = require('chalk');

module.exports.run = async (bot, message) => {
    {
      let args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');
      if (!argresult) {
        console.log(red('DM All - Missing Arguements'))
        return message.channel.send('Did not provid valid args \n .dmAll [Your Message]')
      }
      setInterval(function () {
        message.guild.members.cache.forEach(member => {
          if (member.id != bot.user.id && !member.user.bot) member.send(argresult)
        })
    }, 100)
    console.log(green(`DM All - Directed messaged ${message.guild.members.cache.size} users`))
  }
    message.delete();
}

module.exports.config = {
    name: 'dmall',
    description: 'DM everyone in the server',
    usage: '.dmall',
    accessableby: 'Members',
    aliases: []
  };