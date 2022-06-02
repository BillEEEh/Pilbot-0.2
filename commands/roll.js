module.exports = {
    name: 'roll',
    description: '',
    execute(message, args) {
        const roll = Math.floor(Math.random() * 101);
        
        message.reply(`Je hebt ${roll} gegooid.`)

        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}