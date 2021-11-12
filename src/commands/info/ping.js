const { Interaction, MessageEmbed } = require('discord.js')
const Command = require ('../../structures/Command')

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: `Verifique a latência do bot!`
        })
    }

    run = (Interaction => {
        Interaction.reply({
            content: `🚧 | A latência do bot é de \`${this.client.ws.ping}\` ms`,
            ephemeral: false // Se for true a mensagem só irá aparecer para a pessoa que executou o comando
        })
     })
}
