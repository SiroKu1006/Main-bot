module.exports = {
    name: 'messageCreate',
    async execute(interaction){
        if(interaction.author.bot) return 0 //判斷訊息來源是不是bot
        let color = 0x78f000
        switch (interaction.guildId) {
            case '811880841906749501': //(ﾟ∀。)
            color = 0x78f001
            switch (interaction.channelId) {
                case '820124285384523826'://聊天的拉
                    
                    break;
            
                default:
                    break;
            };
            case '1008691046860992542'://高大資工115級
            color = 0x78f000
                break
            case '1080356542286667836'://資工大群
                break
            default:
                break;
        }
        
    }
}