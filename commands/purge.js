module.exports = {
    name: 'purge',
    description: 'Verwijderd tot 100 berichten',
    execute(message, args) {
        if (message.author.id === '81784467353513984' ||
            message.author.id === '210093094241042433') {
            const deleteNoString = message.content.slice(7)
            const deleteNo = parseInt(deleteNoString)

            if (!isNaN(deleteNo) &&
                (deleteNo > 0) &&
                (deleteNo <= 100)) {
                message.channel.bulkDelete(deleteNo)
                message.channel.send(`${deleteNo} berichten verwijderd op verzoek van <@${message.author.id}>.`)
            }
            else {
                message.reply('Voer een geldig getal in. Bijvoorbeeld: $purge 10. Het mag geen 0 of meer dan 100 zijn.')
            }
        } else {
            message.reply('Jij mag dit helemaal niet')
            message.react('<:jerry:956531885339729920>')
        }
        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}