const { tenorAPIKey } = require('../config.json');
const axios = require('axios');

module.exports = {
    name: 'rarepepe',
    description: '',
    execute(message, args) {
        const option = {
            method: 'GET',
            url: 'https://g.tenor.com/v1/random?',
            params: {
                key: tenorAPIKey,
                q: 'rare pepe',
            }
        }
        message.reply('Bezig met het zoeken van een pepe...').then(m => {
            (axios.request(option).then(function (response){
                m.edit({
                    content: ' ',
                    files: [response.data.results[0].media[0].gif.url]
                }).catch(function (error){
                    m.edit('Pepe is verstopt.')
                })
            }))
        })


        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}