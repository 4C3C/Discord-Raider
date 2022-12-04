const { ms } = require ('ms')
module.exports.run = async (bot, message) => {
    message.channel.send(`${Math.round(bot.ws.ping)}ms`)
}

module.exports.config = {
    name: 'ping',
    description: 'Check the reponse time of the bot',
    usage: '.ping',
    accessableby: 'Members',
    aliases: []
  };