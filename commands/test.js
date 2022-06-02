const { MessageActionRow, MessageButton } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;


module.exports = {
    name: '',
    description: '',
    async execute(message, args) {

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('primary')
                    .setLabel('Primary')
                    .setStyle('PRIMARY')
                    .setDisabled(false),
            );

        await message.reply({ content: 'test', components: [row] });



        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}