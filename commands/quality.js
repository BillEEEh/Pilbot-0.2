module.exports = {
    name: 'quality',
    description: 'lmao',
    execute(message, args) {
        message.channel.send({
            content: '<@979130651133505606> bitch',
            files: ["https://i.kym-cdn.com/entries/icons/original/000/024/062/jerry.jpg"]
        })
        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}