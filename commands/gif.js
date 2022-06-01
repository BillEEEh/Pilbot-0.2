const { apiKey } = require('../config.json');
const axios = require('axios');

module.exports = {
    name: 'gif',
    description: '',
    execute(message, args) {
        const word = message.content.replace(`$${this.name} `, '');
        const url = `https://api.c99.nl/gif?key=${apiKey}&keyword=${word}&json`;
        const random = Math.floor(Math.random() * 10);

        message.reply('Bezig met GIF zoeken...').then(m => {
            (axios.get(url).then(response => m.edit(response.data.images[random]))).catch(function (error){
                console.error(error);
                message.reply('GIF niet gevonden.');
            });
        });

        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}