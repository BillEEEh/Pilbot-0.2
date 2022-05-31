module.exports = {
    name: 'games',
    description: '',
    execute(message, args) {
        message.reply("```\n Game commands: \n $chess \n $poker \n $sketch \n $spellcast \n $wordssnack```")
        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}