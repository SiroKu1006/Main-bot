const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const Guild = require('../../schemas/guild')
const mongoose = require('mongoose')

module.exports = {
    name: 'voiceStateUpdate',
    async execute(oldState,newState,client){
        var user = oldState.member
        if (!oldState.channel) {//in
            var guild_id = newState.guild.id
            var action = 'in'
        } else if(!newState.channel){//out
            var action = 'out'
            var guild_id = oldState.guild.id
        }else{//move
            var guild_id = oldState.guild.id
            var action = 'move'
        }
        var guildProfile = await Guild.findOne({guildId:guild_id})
        var VoiceLogChannel = guildProfile.guildVoiceStateLogChannel
        if (VoiceLogChannel == undefined||VoiceLogChannel == 'none'||VoiceLogChannel == null) {
            console.log(`VoiceLogChannel is undefined`)
            return;
        }
        if (VoiceLogChannel != 'none') {
            var channel = client.channels.cache.get(VoiceLogChannel)
            switch (action) {
                case 'in':
                    const in_embed = new EmbedBuilder()
                    .setTitle(`語音頻道活動紀錄`)
                    .setColor(0x78f000)
                    .addFields([
                        {
                        name:`進入`,
                        value:`${user} 進入 <#${newState.channel.id}>`,
                        inline: false
                    }
                    ])
                    
                    channel.send({embeds:[in_embed]})
                    break;
                case 'out':
                    var out_embed = new EmbedBuilder()
                    .setTitle(`語音頻道活動紀錄`)
                    .setColor(0xf00000)
                    .addFields([
                        {
                        name:`離開`,
                        value:`${user} 離開 <#${oldState.channel.id}>`,
                        inline: false
                    }
                    ])
                    channel.send({embeds:[out_embed]})
                    break;
                case 'move':
                    const move_embed = new EmbedBuilder()
                    .setTitle(`語音頻道活動紀錄`)
                    .setColor(0xff9705)
                    .addFields([
                        {
                        name:`移動`,
                        value:`${user} 從 <#${oldState.channel.id}> 移動到 <#${newState.channel.id}>`,
                        inline: false
                    }
                    ])
                    channel.send({embeds:[move_embed]})
                    break;
                default:
                    break;
            }
            
        }
    }
}