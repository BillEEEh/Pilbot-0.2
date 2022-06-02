const fs = require('fs');

module.exports = {
    name: 'help',
    description: 'Laat een overzicht zien van commands.',
    execute(message, args) {

        const allCommands = fs.readdirSync('./commands/').filter(file => file.endsWith('js'));
        let allCommandsString = '';

        for (const file of allCommands) {
            allCommandsString += '$' + file.toString().replace('.js', '') + '\n';
        }

        var avatarURL = message.member.displayAvatarURL();
        var userName = message.author.username;
        const { MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Pilbot')
            .addFields(
                { name: 'Commands:', value: allCommandsString }
            )
            .setAuthor({ name: userName, iconURL: avatarURL })
            .setThumbnail('https://i.kym-cdn.com/entries/icons/original/000/024/062/jerry.jpg')
            .setFooter({ text: 'fuck qualitybot lmao' })

        message.reply({ embeds: [embed] })

        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}