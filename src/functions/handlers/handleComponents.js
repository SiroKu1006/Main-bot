const {readdirSync, readdir} = require('fs')

module.exports = (client) =>{
    client.handleComponents = async() =>{
        const componentFolders = readdirSync(`./src/components`)
        for (const folder of componentFolders) {
            const componentFiles = readdirSync(`./src/components/${folder}`).filter((file) => file.endsWith('js'))
            const {buttons ,selectMenus,modals} = client
            switch (folder) {
                case "buttons":
                    for (const file of componentFiles) {
                        const button = require(`../../components/${folder}/${file}`)
                        buttons.set(button.data.name,button)
                    }
                    break;
                case "selectMenu":
                    for (const file of componentFiles) {
                        const menu = require(`../../components/${folder}/${file}`)
                        selectMenus.set(menu.data.name,menu) 
                    }
                case "modals":
                    for (const file of componentFiles) {
                        const modal = require(`../../components/${folder}/${file}`)
                        modals.set(modal.data.name,modal)
                    }
                    break
                
                default:
                    try {
                        for (const file of componentFiles) {
                            const component = require(`../../components/${folder}/${file}`)
                            modals.set(component.data.name,component )
                        }
                    } catch (error) {
                        console.log(error)
                    }
                    break;
            }
        }
    }
}