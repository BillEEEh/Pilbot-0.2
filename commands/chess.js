module.exports = {
    name: 'chess',
    description: '',
    execute(message, args) {
        if (message.content === '$chess ') {
            if(message.member.voice.channel) {
                message.client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite => {
                    return message.channel.send(`${invite.code}`);
                });
            };
        };
        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}