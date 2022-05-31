module.exports = {
    name: 'sketch',
    description: '',
    execute(message, args) {
        if (message.content === '$sketch') {
            if(message.member.voice.channel) {
                message.client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'sketchheads').then(async invite => {
                    return message.channel.send(`${invite.code}`);
                });
            };
        };

        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}