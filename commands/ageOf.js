module.exports = {
    name: 'ageof',
    description: '',
    execute(message, args) {
        if (message.author.id === '189346966465937409') {
            message.reply(`Jij mag geen leeftijden opvragen Koen <:jerry:956531885339729920>`)
        }
        else {
            try {
                var user = message.mentions.users.first()
                var member = message.mentions.members.first()

                if (!(user.bot)) {
                    message.reply(`Het account van ${member.nickname} is gemaakt op ${user.createdAt.toDateString()}`)
                }
                else {
                    message.reply('Dit werkt niet op bots.')
                }
            } catch (error) {
                message.reply(`Je hebt geen gebruiker genoemd <:jerry:956531885339729920>`)
            }
            console.log(`ageOf command uitgevoerd door ${message.author.username}`)
        }
        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}