module.exports = {
    name: 'wordssnack',
    description: '',
    execute(message, args) {
        if (message.content === '$wordssnack') {
            if (message.member.voice.channel) {
                message.client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'wordsnack').then(async invite => {
                    return message.channel.send(`${invite.code}`);
                });
            };
        };
        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}