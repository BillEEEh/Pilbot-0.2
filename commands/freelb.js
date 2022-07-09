module.exports = {
    name: 'freelb',
    description: '',
    execute(message, args) {
        const luabotid = '979130651133505606'

        message.channel.send(`free my nigga <@${luabotid}> <@&918543702987784293>`)
        console.log(`${this.name} command uitgevoerd door ${message.author.username} `);
    }
}