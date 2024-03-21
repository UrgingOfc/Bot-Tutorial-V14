const { Client, GatewayIntentBits, Partials } = require('discord.js');

const config = require('./config.json');

let botIntents = [
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent
];

let botPartials = [
    Partials.Channel,
    Partials.GuildMember,
    Partials.ThreadMember,
    Partials.Message,
    Partials.User,
    Partials.Reaction
];

const client = new Client({ intents: botIntents, partials: botPartials });

client.login(config.Token).then(() => {
    console.log('Bot iniciado com sucesso!');
});