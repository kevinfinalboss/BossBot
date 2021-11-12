const Event = require(`../../structures/Event`)
const status =

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'ready'
        })
    }

    run = () => {
        console.log(`Bot ${this.client.user.username} Logado com sucesso em ${this.client.guilds.cache.size} servidores`)
        this.client.registryCommands()
    }
}