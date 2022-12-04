const Discord = require('discord.js');
const config = require('./config.json');
const { readdirSync } = require("fs");
const { sep } = require("path");

const bot = new Discord.Client({ disableEveryone: true });

require("./util/eventHandler")(bot)

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const load = (dir = "./commands/") => {

    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}${sep}${dirs}${sep}`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
            const pull = require(`${dir}/${dirs}/${file}`);
            if (bot.commands.get(pull.config.name)) return console.warn(`Two or more commands have the same name ${pull.config.name}.`);
            bot.commands.set(pull.config.name, pull);
            console.log(` Loaded command ${pull.config.name}`);

            if (pull.config.aliases && typeof(pull.config.aliases) === "object") {
                pull.config.aliases.forEach(alias => {
                    if (bot.aliases.get(alias)) return console.warn(`Two commands or more commands have the same aliases ${alias}`);
                    bot.aliases.set(alias, pull.config.name);
                });
            }
        }

    });
};
load();

bot.on("message", async message => {
    const prefix = config.prefix;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    let command;

    if (message.author.bot || !message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message.author);
    if (!message.content.startsWith(prefix)) return;
    if (cmd.length === 0) return;
    if (bot.commands.has(cmd)) command = bot.commands.get(cmd);
    else if (bot.aliases.has(cmd)) command = bot.commands.get(bot.aliases.get(cmd));
    if (command) command.run(bot, message, args);
});

bot.login(config.token);