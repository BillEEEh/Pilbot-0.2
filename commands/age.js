module.exports = {
    name: 'age',
    description: '',
    execute(message, args) {
        const age = new Date(message.author.createdAt)
        message.reply(`Account is gemaakt op: ${age.toDateString()}`)
        
        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}