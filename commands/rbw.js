module.exports = {
    name:'rbw',
    description:'ping commando',
    execute(message,args) {
        const date1 = new Date('9/4/2009')
        const date2 = Date.now()

        var delta = Math.abs(date2 - date1) / 1000

        //dagen berekenen en van geheel afhalen
        var days = Math.floor(delta / 86400)
        delta -= days * 86400

        //bereken uren en van geheel afhalen
        var hours = Math.floor(delta / 3600) % 24
        delta -= hours * 3600

        //bereken minuten en van geheel afhalen
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes

        //bereken wat over is in seconden 
        var seconds = Math.floor(delta % 60);

        delta -= days * 86400
        // const diffTime = Math.abs(date2 - date1)
        // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        message.reply(`Floran doet al ${days} dagen, ${hours} uur, ${minutes} minuten en ${seconds} seconde over zijn rijbewijs.`)
    }
}