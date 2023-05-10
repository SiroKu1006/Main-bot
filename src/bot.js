require('dotenv').config()
const { connect } = require('mongoose');
const {Client,Collection,ActivityType,GatewayIntentBits,Partials} = require('discord.js')
const fs =  require('fs')
const { Console } = require('console');

const client = 
new Client({intents:
    [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessageReactions,]
    ,partials: 
    [Partials.Message, 
    Partials.Channel,
    Partials.Reaction]
})

client.commands = new Collection()
client.buttons = new Collection()
client.selectMenus = new Collection()
client.modals = new Collection()
client.commandArray = []


const functionFolders = fs.readdirSync(`./src/functions`)
for (const folder of functionFolders) {
    const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"))
    for(const file of functionFiles){
        require(`./functions/${folder}/${file}`)(client)
    }
}

client.handleEvents()
client.handleCommands()
client.handleComponents()
client.login(process.env.TOKEN);
(async () =>{
    await connect(process.env.DataBaseToken).catch(console.error)
})()
require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000)
