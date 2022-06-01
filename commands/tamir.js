module.exports = {
    name: 'tamir',
    description: '',
    execute(message, args) {
        try {
            const tamir = message.guild.members.cache.get('156904842378346496');

            for (let i = 0; i < 50; i++) {
                tamir.voice.setChannel('918551007309484123');
                tamir.voice.setChannel('804682023767113732');
            }
        } catch (error){
            console.error();
            message.reply('Tamir is hier heulemaal ni');
        }

        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}