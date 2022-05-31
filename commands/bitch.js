module.exports = {
    name: 'bitch',
    description: '',
    execute(message, args) {
        try {
            var bitch = message.mentions.users.first().id
            if (bitch === '824233879991877632') {
                message.reply(`u a bitch <@${message.author.id}> bitch`)
            } else {
                message.reply(`u a bitch <@${bitch}> bitch`)
            }
        } catch (error) {
            message.reply(`Je moet iemand mentionen: $bitch @naam`);
            console.error(error);
        }

        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}