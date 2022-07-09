const { tenorAPIKey } = require('../config.json');
const axios = require('axios');

module.exports = {
    name: 'gif',
    description: '',
    execute(message, args) {
        var word = message.content.replace(`$${this.name} `, '');
        const option = {
            method: 'GET',
            url: 'https://g.tenor.com/v1/random?',
            params: {
                key: tenorAPIKey,
                q: word,
            }
        }

        if (word.includes('\\')) {
            message.reply('Nice try <:jerry:956531885339729920>');
        } else {
            message.reply('Bezig met het zoeken van de GIF...').then(m => {
                (axios.request(option).then(function (response){
                    m.edit(response.data.results[0].media[0].gif.url)
                }).catch(function (error){
                    m.edit('GIF niet gevonden.');
                }))
            })
        }

        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}