const { ActivityType } = require('discord.js')

module.exports = {
    name: 'ready',
    once : true,
    async execute(client){
        console.log(`${client.user.tag} is online.`)
        user = process.env.MyDiscordId
        try {
            client.users.send(user, 'Uptime Reboot')
            client.user.setStatus('dnd');//設定機器人狀態
            client.user.setActivity('EGOIST『Departures 〜あなたにおくるアイの歌〜』',{type: ActivityType.Listening});//設定遊玩狀態       
        } catch (err) {
            console.error(err)
        }
    }
}    