const Discord = require('discord.js')
const { token } = require('./config.json');
//const { generateDependencyReport } = require('@discordjs/voice');
const { DiscordTogether } = require('discord-together');
const fs = require('fs');
const { RequestManager } = require('@discordjs/rest');

//console.log(generateDependencyReport());

const client = new Discord.Client({
	intents: [
		'DIRECT_MESSAGES',
		'GUILDS',
		'GUILD_MESSAGES',
		'GUILD_MESSAGE_REACTIONS',
		'GUILD_VOICE_STATES',
	]
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	client.user.setPresence({
		activities: [{
			name: 'waar is Tom',
			type: 'COMPETING',
		}]
	});

	console.log('Jerry is online!');

});

const prefix = '$'
client.discordTogether = new DiscordTogether(client);

client.on('messageCreate', async message => {


	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;
	client.commands.get(command).execute(message, args);
});


// Timeout voor de gebruikers op het soundboard:
const talkedRecently = new Set();

client.on('interactionCreate', async (interaction) => {
	const { createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, createAudioResource, StreamType, AudioPlayerStatus, VoiceConnectionStatus, AudioPlayer } = require('@discordjs/voice');
	const { join } = require('node:path');
	console.log(`${interaction.member.nickname} heeft op een knop gedrukt.`);

	if (!interaction.isButton()) return;
	//if(!(interaction.channel.name).toLowerCase().includes('bot')) return;
	if (interaction.member.voice.channelId === null) return;


	const voiceChannel = interaction.member.voice.channel;
	const permissions = voiceChannel.permissionsFor(interaction.client.user);
	if (!permissions.has("SPEAK"))
		return interaction.channel.send("You dont have the correct permissions");

	const connection = joinVoiceChannel({
		channelId: voiceChannel.id,
		guildId: voiceChannel.guildId,
		adapterCreator: interaction.guild.voiceAdapterCreator,
	});
	const player = createAudioPlayer({
		behaviors: {
			noSubscriber: NoSubscriberBehavior.Pause,
		}
	});

	if (talkedRecently.has(interaction.user.id)) {
		interaction.channel.send(`${interaction.member.nickname}, wacht even met het volgende geluid (5sec. cooldown).`);
	} else {
		talkedRecently.add(interaction.user.id);

		const resource = createAudioResource(join('./soundboard/', interaction.customId + `.mp3`));
		connection.subscribe(player);
		player.play(resource);

		interaction.reply({ content: `${interaction.member.nickname} heeft het soundboard gebruikt.` })

		setTimeout(() => {
			talkedRecently.delete(interaction.user.id);
		}, 5000);
	}
});


client.login(token);