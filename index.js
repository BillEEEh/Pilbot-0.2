const Discord = require('discord.js')
const { token } = require('./config.json');
//const { generateDependencyReport } = require('@discordjs/voice');
const { DiscordTogether } = require('discord-together');
const fs = require('fs');

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

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isButton()) return;
	if (interaction.user.id !== ('81784467353513984')) return;

	//
	//
	//testfunctie hieronder


	//
	//
	//


})


client.login(token);