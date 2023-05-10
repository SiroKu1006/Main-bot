const {ActionRowBuilder, ButtonBuilder,SlashCommandBuilder,EmbedBuilder, StringSelectMenuBuilder,StringSelectMenuOptionBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`help`)
        .setDescription(`看來您需要支援`),
    async execute(interaction,client){
        const home_page = new StringSelectMenuBuilder()
            .setCustomId(`homepage1`)
            .setMaxValues(1)
            .setMinValues(1)
            .setPlaceholder('欸對 我是選單')
            .addOptions(new StringSelectMenuOptionBuilder()
                .setLabel('這是第一個選單(´･ω･`)')
                .setDescription('我還沒寫好')
                .setValue('homepage1')
                .setEmoji('<:Gura_Eyes:832466275250733076>'),
                new StringSelectMenuOptionBuilder()
                .setLabel('這是第二個選單(´･ω･`)')
                .setDescription('這也還沒寫好')
                .setValue('homepage2')
                .setEmoji('<a:Diona_gif_03:980831104703557672>'),
            )
        const GitHub = new ButtonBuilder()
            .setStyle(`Link`)
            .setLabel(`GitHub`)
            .setEmoji(`<:github:946200976866549800>`)
            .setURL(`https://github.com/SiroKu1006`)
        const embed = new EmbedBuilder()
            .setTitle(`以下是使用說明`)
            .setDescription(`但我還沒想到要打什麼`)
            .setAuthor({
                name:`${client.user.username}#${client.user.discriminator} 幫助列表`,
                iconURL: `${client.user.displayAvatarURL()}`
            })
            .setFooter({
                text:`⭐開發者：SiroKu_#1006`,
                iconURL:`${client.user.displayAvatarURL()}`,
            })
            .setTimestamp(Date().now)

        
        await interaction.reply({
            embeds: [embed],
            components: [
                new ActionRowBuilder().addComponents(home_page),
                new ActionRowBuilder().addComponents(GitHub)
            ]
        })
    }
}