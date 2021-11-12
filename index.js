require('dotenv').config()

const {  Message, MessageEmbed } = require('discord.js')
const { type } = require('os')
const Client = require('./src/structures/Client')

const client = new Client({
    intents: [ // Intenção do bot
    'GUILDS',
    'GUILD_MESSAGE_REACTIONS',
    'GUILD_MESSAGES',
    'GUILD_INVITES',
    'GUILD_VOICE_STATES',
    'GUILD_MEMBERS',
    'GUILD_PRESENCES',
    ]
})

client.once('ready', function(){
    console.log("Bot logado")
})

client.on('ready', () =>{
    let activities = [
        `GAMA XP`
    ],
    i = 0;
    setInterval( () =>
    client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"

    }), 6000);
})

client.login(process.env.BOT_TOKEN);
