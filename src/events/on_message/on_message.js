const { MessageActivityType } = require('discord.js')
const Guild = require('../../schemas/guild')
const mongoose = require('mongoose')


module.exports = {
    name: 'messageCreate',
    async execute(interaction){
        if(interaction.author.bot||interaction.guildId == null) return //判斷訊息來源是不是bot || 是否為DM
        let guildProfile = await Guild.findOne({guildId:interaction.guildId})
        if(!guildProfile){
            let prefix = guildProfile.guildPrefix
            if (typeof prefix == 'undefined') {
                prefix = 's!'
            }
        }else{
            prefix = 's!'
        }
        if (interaction.content.startsWith(prefix)) {
            const args = interaction.content 
            .slice(prefix.length)
            .trim()
            .split(/ +/g);
            const command = args.shift();
            //把前面的存成command
            console.log(command)
        }
        
    }
}
