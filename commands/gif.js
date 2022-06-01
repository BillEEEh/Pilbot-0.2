const { apiKey } = require('../config.json');
const axios = require('axios');

module.exports = {
    name: 'gif',
    description: '',
    execute(message, args) {
        var word = message.content.replace(`$${this.name} `, '');
        const random = Math.floor(Math.random() * 10);
        const option = {
            method: 'GET',
            url: 'https://g.tenor.com/v1/search',
            params: {
                key: '603R7MO2I90U',
                q: word,
                limit: 10
            }
        }

        if (word.includes('\\')) {
            message.reply('Nice try <:jerry:956531885339729920>');
        } else {
            message.reply('Bezig met het zoeken van de GIF...').then(m => {
                (axios.request(option).then(function (response){
                    m.edit(response.data.results[random].media[0].gif.url).catch(function (error){
                        m.edit('GIF niet gevonden.')
                    })
                }))
            })
        }

        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}