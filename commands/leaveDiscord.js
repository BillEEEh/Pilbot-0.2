module.exports = {
    name: 'leavediscord',
    description: 'leaves the guild',
    execute(message, args) {
        if(message.author.id === '81784467353513984'){
            message.guild.leave();
        } else{
            message.reply('Alleen <@81784467353513984> mag dit doen.')
        }
        
        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}