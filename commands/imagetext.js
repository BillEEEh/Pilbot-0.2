const { apiKey } = require('../config.json');
const axios = require('axios');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'imagetext',
    description: '',
    execute(message, args) {
        const imageURL = message.content.replace(`$${this.name} `, '');
        const url = `https://api.c99.nl/textparser?key=${apiKey}&url=${imageURL}`;

        message.reply('Bezig met uitlezen...').then(m => {
            (axios.get(url).then(response => m.edit(response.data)));
        });
        
        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}