const {SlashCommandBuilder} = require('discord.js')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('hentai')
		.setDescription('Only use NSFW channel')
		.addStringOption(option =>
            option.setName('web')
				.setDescription('哪個網站')
				.setRequired(true)
				.addChoices(
					{ name: 'nhentai', value: 'nhentai' },
					{ name: '紳士', value: 'wnacg' },
					{ name: '禁漫', value: `jinman`}
				)
		)
        .addNumberOption(option =>
            option.setName('gd_number')
                .setDescription('number')
                .setRequired(true)
		)
        ,
	async execute(interaction,client) {
        if (interaction.channel.nsfw || interaction.channel.id === '924976048209293332') {
			if (interaction.options.get('web').value === 'nhentai') {
				await interaction.reply({
					content:`https://nhentai.net/g/${interaction.options.get('gd_number').value}/1`
				})
			}else if(interaction.options.get('web').value === 'wnacg'){
				await interaction.reply({
					content:`https://www.wnacg.com/photos-slide-aid-${interaction.options.get('gd_number').value}.html`
				})
			}else if (interaction.options.get('web').value === 'jinman'){
				await interaction.reply({
					content:`https://18comic.org/photo/${interaction.options.get('gd_number').value}/`
				})
			}
        } 
        else {
			console.log(interaction.channel.id)
            await interaction.reply({
                content:`Is not NSFW channel`,
                ephemeral: true
            })
        }
	},
};