const { Client, GatewayIntentBits, ChannelType, ActivityType } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const fs = require('fs');
const configs = require('./config.js');

configs.forEach(config => {
    const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });

    client.once('ready', async () => {
        console.log(`Logged in as ${client.user.tag}`);

        client.user.setPresence({
            activities: [{ name: 'parsher baba', type: ActivityType.Playing }],
            status: 'online',
        });

        try {
            const channel = await client.channels.fetch(config.VOICE_CHANNEL_ID);
            if (channel && channel.type === ChannelType.GuildVoice) {
                joinVoiceChannel({
                    channelId: channel.id,
                    guildId: channel.guild.id,
                    adapterCreator: channel.guild.voiceAdapterCreator,
                    selfDeaf: false // pekte önemli değil ama bence kapalı kalsın (opsiyonel)
                });
                console.log(`Joined voice channel: ${channel.name}`);
            } else {
                console.error('Voice channel not found or not a voice channel.');
            }
        } catch (error) {
            console.error(`Could not join voice channel: ${error}`);
        }
    });

    client.commands = new Map();
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    } 

    client.on('messageCreate', message => {
        if (!message.content.startsWith(config.PREFIX) || message.author.bot) return;

        const args = message.content.slice(config.PREFIX.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!client.commands.has(commandName)) return;

        const command = client.commands.get(commandName);

        try {
            command.execute(message, args, client);
        } catch (error) {
            console.error(error);
            message.reply('There was an error executing that command.');
        }
    });

    client.login(config.TOKEN);
});