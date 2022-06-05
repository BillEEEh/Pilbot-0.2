const { XRapidAPIKey } = require('../config.json');
const axios = require('axios');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'def',
    description: 'Grabs a definition for the word from urban dictionary',
    aliases: ["leave"],
    execute(message, args) {
        const word = message.content.replace(`$${this.name} `, '');
        const options = {
            method: 'GET',
            url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
            params: { term: word },
            headers: {
                'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
                'X-RapidAPI-Key': XRapidAPIKey
            }
        };
        axios.request(options).then(function (response) {
            const definition = response.data.list[0].definition
                .replaceAll('[', '')
                .replaceAll(']', '');
            const example = response.data.list[0].example
                .replaceAll('[', '')
                .replaceAll(']', '');
            const definitionURL = response.data.list[0].permalink

            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setLabel('Link')
                        .setStyle('LINK')
                        .setURL(definitionURL)
                );


            message.reply({ content: `${definition} \n \`\`\`${example}\`\`\` \n`, components: [row] });
        }).catch(function (error) {
            console.error(error);
            message.reply('Woord niet gevonden in Urban Dictionary.');
        });

        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}