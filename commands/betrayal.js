module.exports = {
    name: 'betrayal',
    description: '',
    execute(message, args) {
        if (message.content === '$betrayal') {
            if(message.member.voice.channel) {
                message.client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'betrayal').then(async invite => {
                    return message.channel.send(`${invite.code}`);
                });
            };
        };
        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}