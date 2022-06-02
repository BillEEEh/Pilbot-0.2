module.exports = {
    name: 'steenpapierschaar',
    description: '',
    execute(message, args) {
        const opties = ['Steen', 'Papier', 'Schaar'];
        const keuze = (Math.floor(Math.random() * (opties.length)));

        message.reply(`Je hebt ${opties[keuze]}`)

        console.log(keuze)
        
        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}