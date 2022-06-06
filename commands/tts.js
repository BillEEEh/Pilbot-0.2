const { createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, createAudioResource, StreamType, AudioPlayerStatus, VoiceConnectionStatus, AudioPlayer } = require('@discordjs/voice');
const googleTTS = require('google-tts-api');

module.exports = {
    name: 'tts',
    description: 'Speelt tts af',
    execute(message, args) {
        //Controleert op permissions
        const voiceChannel = message.member.voice.channel;
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("SPEAK"))
            return message.channel.send("You dont have the correct permissions");

        //TTS 
        const content = message.content.replace(`$${this.name} `, '');
        const url = googleTTS.getAudioUrl(content, {
            lang: 'nl',
            slow: false,
            host: 'https://translate.google.com',
        });

        //Maak connection en player aan
        const connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: voiceChannel.guildId,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
            }
        });

        connection.on(VoiceConnectionStatus.Ready, () => {
            console.log('The connection has entered the Ready state - ready to play TTS!');
        });

        // Controleert op permissions
        const resource = createAudioResource(url);

        connection.subscribe(player);
        player.play(resource);


        player.on(AudioPlayerStatus.Playing, () => {
            console.log('Speler is begonnen met spelen')
        })

        player.on(AudioPlayerStatus.Idle, () => {
            connection.destroy();
        })





        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}