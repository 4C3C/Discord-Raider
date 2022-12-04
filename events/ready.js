module.exports = (bot) => {
    console.log(`${bot.user.username} is online`);
    bot.user.setActivity(`.help | Inside your mom`, { type: 'PLAYING' });
  };
  