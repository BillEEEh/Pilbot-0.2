const { MessageActionRow, MessageButton, Interaction } = require('discord.js');

module.exports = {
    name: 'soundboard',
    description: 'Soundboard',
    async execute(message, args) {

        const rowFlo1 = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('FloranJa')
                .setLabel('Ja')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('FloranHallo')
                .setLabel('Hallo')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('FloranHAN')
                .setLabel('HAN')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('FloranWTF')
                .setLabel('WTF')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('FloranGrappig')
                .setLabel('Grappig')
                .setStyle('PRIMARY'),
        );
        const rowFlo2 = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('FloranHee')
                .setLabel('Hee')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('FloranHeeMDIL')
                .setLabel('Hee maar dat is leuk')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('FloranNorthrend')
                .setLabel('Northrend')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('FloranGaga')
                .setLabel('Gaga')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('FloranMario')
                .setLabel('Mario')
                .setStyle('PRIMARY'),
        );


        const rowTony = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('TonyJa')
                .setLabel('Ja')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('TonyHehe')
                .setLabel('Hehe')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('TonyBroodjoekelplank')
                .setLabel('Broodjoekelplank')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('TonyOh')
                .setLabel('Oh')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('TonyKachel')
                .setLabel('Kachel')
                .setStyle('SECONDARY'),
        );


        const rowKoen = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('KoenJa')
                .setLabel('Ja')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('KoenHey')
                .setLabel('Hey')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('KoenOja')
                .setLabel('Oja')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('KoenKerker')
                .setLabel('Kerker')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('KoenWiet')
                .setLabel('Wiet')
                .setStyle('SUCCESS'),
        );

        const oergrap = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('oergrap')
                .setLabel('oergrap')
                .setStyle('DANGER'),
        )

        message.reply({ content: 'Soundboard Floran:', components: [rowFlo1] });
        message.reply({ content: ' ', components: [rowFlo2] });

        message.reply({ content: 'Soundboard Tony:', components: [rowTony] });

        message.reply({ content: 'Soundboard Koen:', components: [rowKoen] });

        message.reply({ content: 'oergrap', components [oergrap]})


        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}