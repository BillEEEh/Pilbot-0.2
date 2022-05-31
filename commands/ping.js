module.exports = {
    name:'ping',
    description:'ping commando',
    execute(message,args) {
        message.channel.send('pong!')
    }
}