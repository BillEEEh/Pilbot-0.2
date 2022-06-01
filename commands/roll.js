module.exports = {
    name: 'roll',
    description: '',
    execute(message, args) {
        const rollUser = Math.floor(Math.random() * 101);
        const rollBot = Math.floor(Math.random() * 101);
        
        message.reply(`Je hebt ${rollUser} gerold. \n Ik heb ${rollBot} gerold.`)

        if(rollUser < rollBot){
            message.reply(`Lmao <@${message.author.id}> sukkel <:jerry:956531885339729920>`);
        }
        else {
            message.reply('kanker')
        }

        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}