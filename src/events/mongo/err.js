const chalk = require('chalk')

module.exports = {
    name: 'err',
    execute(err){
        console.log(`Error\n${err}`)
    }
}