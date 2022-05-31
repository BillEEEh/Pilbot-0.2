module.exports = {
    name: 'help',
    description: 'Laat een overzicht zien van commands.',
    execute(message, args) {
        
        var avatarURL = message.member.displayAvatarURL();
        var userName = message.author.username;
        const { MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Pilbot')
            .addFields(
                { name: 'Commands:', value: `ping \n rbw \n age \n ageOf \n latency \n quality ` }
            )
            .setAuthor({ name: userName, iconURL: avatarURL })
            .setThumbnail('https://i.kym-cdn.com/entries/icons/original/000/024/062/jerry.jpg')
            .setFooter({ text: 'fuck qualitybot lmao' })

        message.reply({ embeds: [embed] })

        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}