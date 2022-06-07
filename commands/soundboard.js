const { MessageActionRow, MessageButton, Interaction } = require('discord.js');

module.exports = {
    name: 'soundboard',
    description: 'Soundboard',
    async execute(message, args) {

        const rowFlo1 = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('HAN')
                .setLabel('HAN')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('WTF')
                .setLabel('WTF')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('Ja')
                .setLabel('Ja')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('Hallo')
                .setLabel('Hallo')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('Grappig')
                .setLabel('Grappig')
                .setStyle('PRIMARY'),
        );
        const rowFlo2 = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('Hee')
                .setLabel('Hee')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('HeeMDIL')
                .setLabel('Hee maar dat is leuk')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('Northrend')
                .setLabel('Northrend')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('Gaga')
                .setLabel('Gaga')
                .setStyle('PRIMARY'),
        );

        message.reply({ content: 'Soundboard Floran:', components: [rowFlo1] })
        message.reply({ content: ' ', components: [rowFlo2] })


        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}