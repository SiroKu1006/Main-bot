const {Schema,model} = require('mongoose')
const guildSchema = new Schema({
    Id: String,
    Name:  String,
    owner: String,
    Icon:{type:String,required: false},
    // MessageChangeLogChannel:{type:String,required:false},
    // MessageDeleteLogChannel:{type:String,required:false},
    // VoiceStateLogChannel:{type:String,required:false} ,
    // WelcomeMessageChannel:{type:String,required:false},
    // LeaveMessageChannel:{type:String,required:false},
    // BotUpdateLogChannel:{type:String,required:false},  用新增的

})

module.exports = model("Guild",guildSchema,"guilds")