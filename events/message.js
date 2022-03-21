const client = require('../bot.js');
const config = require('../konfiguracja.json');

client.on('messageCreate', async message =>{
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 

    {   
        const msg = message.content.toLowerCase();
    
        if(!message.author.bot)
        {
            if(msg == 'szpaku')
            {
             message.reply('pysk');
            }
        }
    }
})

