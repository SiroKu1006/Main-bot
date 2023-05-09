const {REST} = require(`@discordjs/rest`)
const { Routes } = require(`discord-api-types/v10`)
const fs = require('fs')
require('dotenv').config()
const {token} = process.env.TOKEN

module.exports = (client) =>{
    client.handleCommands = async() =>{
        const commandFolders = fs.readdirSync("./src/commands")
        console.log(`Start (/) commands.`)
        for(const folder of commandFolders){
            const commandFiles = fs
            .readdirSync(`./src/commands/${folder}`)
            .filter((file) => file.endsWith('.js'))

            const {commands,commandArray} = client
            switch (commandFiles) {
                case 'nsfw':
                    for(const file of commandFiles){
                        const command = require(`../../commands/${folder}/${file}`)
                        commands.set(command.data.name, command)
                        commandArray.push(command.data.toJSON())
                    }
                    break;
            
                default:
                    for(const file of commandFiles){
                        const command = require(`../../commands/${folder}/${file}`)
                        commands.set(command.data.name, command)
                        commandArray.push(command.data.toJSON())
                    break;
            }

            }
        }
        const rest = new REST({ version: '10' });
        rest.setToken(process.env.TOKEN);
        try {
            await rest.put(
                Routes.applicationCommands(process.env.clientId),
                { body: client.commandArray },
            );
            console.log(`Complete (/) commands.`)
        } catch (error) {
            console.log(`Error (/) commands.`)
            console.error(error)
        }
    }
}