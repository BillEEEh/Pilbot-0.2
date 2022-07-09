module.exports = {
    name: 'races',
    description: '',
    execute(message, args) {
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: 'https://f1-live-motorsport-data.p.rapidapi.com/races/2022',
            headers: {
                'X-RapidAPI-Key': 'fcc9240736msh5716520765f40d2p1cc30bjsn519fa032e65e',
                'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            const meta = response.data.results;
            let races = '';

            meta.forEach(race => {
                if(race.status === 'Confirmed')
                races = races + `>${race.name} ${race.end_date} \n`
            });

            message.reply(`\`\`\`${races}\`\`\``)
        }).catch(function (error) {
            console.error(error);
        });



        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}