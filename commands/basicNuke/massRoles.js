const { red, green } = require('chalk');

module.exports.run = async (bot, message) => {
       // Begin creating roles
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) {
        return console.log(red('Mass Roles - Missing Administrator'))
    }
    else {
      let args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');
      if (!argresult) {
        console.log(red('Mass Roles - Missing Arguements'))
        return message.channel.send('Did not provid valid args \n .massRoles [Your Message]')
      }
      setInterval(function () {
        var i = 0; i < 250;
        message.guild.roles.create({
            data: {
                name: argresult,
                position: i++,
                color: "RANDOM"
            }
        }).then(console.log(green('Mass Roles - Mass Creating Roles')))
    }, 100)
  }
    message.delete();
}

module.exports.config = {
    name: 'massroles',
    description: 'Create a bunch of roles',
    usage: '.massroles',
    accessableby: 'Members',
    aliases: []
  };