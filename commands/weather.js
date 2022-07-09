const { XRapidAPIKey } = require('../config.json');
module.exports = {
    name: 'weather',
    description: 'haalt het weer op van de locatie',
    execute(message, args) {

        const axios = require("axios");
        const location = message.content.replace(`$${this.name} `, '');

        const options = {
            method: 'GET',
            url: 'https://yahoo-weather5.p.rapidapi.com/weather',
            params: { location: location, format: 'json', u: 'c' },
            headers: {
                'X-RapidAPI-Key': XRapidAPIKey,
                'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            const low = response.data.forecasts[0].low;
            const high = response.data.forecasts[0].high;
            const description = response.data.forecasts[0].text;

            const city = response.data.location.city;
            const region = response.data.location.region;

            message.reply(`Vandaag is het in ${city} tussen de ${low} en ${high} graden.`)

        }).catch(function (error) {
            message.reply(`Kan ${location} niet vinden.`)
            console.error(error);
        });

        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}