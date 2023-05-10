const {SlashCommandBuilder,PermissionFlagsBits} = require('discord.js')
const Guild = require('../../schemas/guild')
const mongoose = require('mongoose')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('setup')
		.setDescription('初始化資料庫')
        .PermissionFlagsBits(PermissionFlagsBits.Administrator),
	async execute(interaction,client) {
		console.log(interaction.guild.id)
        let guildProfile = await Guild.findOne({guildId:interaction.guild.id})
        if (!guildProfile) {
            guildProfile = await new Guild({
				guildId: interaction.guild.id,
				guildName: interaction.guild.name,
				guildIcon: interaction.guild.iconURL() ? interaction.guild.iconURL():"none",
			})
			await guildProfile.save().catch(console.error)
			await interaction.reply({
				content: `Server Name: ${guildProfile.guildName}`
			})
        }else{
			let guildProfile = await Guild.findOne({guildId:interaction.guild.id})
			await interaction.reply({
				content: `已初始化`
			})
			console.log(guildProfile)
		}
	},
};