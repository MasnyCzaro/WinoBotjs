const {Collection, Client, Discord} = require('discord.js')
const { token } = require('./konfiguracja.json');
const fs = require('fs')

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});

module.exports = client;

client.once('ready', () => {
	console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~|')
	console.log('| Bot Gotowy do działanaia |')
	console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~|')

    client.user.setActivity('Kocham cycki wikuś' , {type : 'LISTENING'});
});

 // SKRYPT KTORY ODPOWIADA NA WIADOMOSCI UZYTKOWNIKA


client.on('messageCreate' , async message =>
    {
        if(!message.author.bot)
        {
            if(message.content == "olek")
            {
        message.channel.send("trollek");
            }
        }


    });
/* SKRYPT NA AUTOROLE BOT DLA BOTA KTORY DOLACZY NA SERWER
    {
        client.users.cache.find(user = user.id);

        const name = new (userId); 

    client.users.cache.get("id").bot
    client.guilds.cache.get("949251270768746506").members.cache.get(user.id).roles.add("954109516813852762");
    member.roles.add(role);
    }

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

["commandHandler", "eventHandler"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
    
});
*/


client.login('OTU0MjgwMzU3NDc2MzAyODc5.YjQ01g.RFjxGAdI8OUwi7IsNt-0IkuqT0g');
