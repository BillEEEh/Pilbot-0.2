module.exports = {
    name: 'spellcast',
    description: '',
    execute(message, args) {
        if (message.content === '$spellcast') {
            if(message.member.voice.channel) {
                message.client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'spellcast').then(async invite => {
                    return message.channel.send(`${invite.code}`);
                });
            };
        };
        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}