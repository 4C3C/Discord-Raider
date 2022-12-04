const { red, green} = require('chalk');

module.exports.run = async (bot, message) => {
       // Begin Nuking Roles
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) {
        return console.log(red('Nuke Roles - Missing Administrator'))
    } else {
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
      }
      console.log(green(`Nuke Roles - All roles nuked`))
          // If they do not have the roles
    message.delete();
}

module.exports.config = {
    name: 'nukeroles',
    description: 'Nuke all of the roles in the discord',
    usage: '.nukeroles',
    accessableby: 'Members',
    aliases: []
  };