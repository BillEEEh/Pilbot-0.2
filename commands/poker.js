module.exports = {
    name: 'poker',
    description: 'Starts a poker game in Discord voice channel.',
    execute(message, args) {
        if (message.content === '$poker') {
            if(message.member.voice.channel) {
                message.client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
                    return message.channel.send(`${invite.code}`);
                });
            };
        };
        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}