module.exports = {
    name: 'latency',
    description: 'Laat latency zien',
    execute(message, args) {
        message.reply('Pinging...🏓').then(m => {
            m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms.`);
            m.react('<:jerry:956531885339729920>');
        });
        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}