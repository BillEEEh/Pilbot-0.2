const axios = require('axios');

module.exports = {
    name: 'rarepepe',
    description: '',
    execute(message, args) {
        const option = {
            method: 'GET',
            url: 'https://g.tenor.com/v1/random?',
            params: {
                key: '603R7MO2I90U',
                q: 'rare pepe',
            }
        }
        message.reply('Bezig met het zoeken van een pepe...').then(m => {
            (axios.request(option).then(function (response){
                m.edit(response.data.results[0].media[0].gif.url).catch(function (error){
                    m.edit('GIF niet gevonden.')
                })
            }))
        })


        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}