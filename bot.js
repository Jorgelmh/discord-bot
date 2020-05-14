/* Simple bot for Master and the boy's discord server */
const Discord = require('discord.io')

/* Import token */
const {AuthToken, devGame} = require('./config.js')

/* Instantiating the bot */
const bot = new Discord.Client({
    token: AuthToken,
    autorun: true
})

/* message Listeners */
bot.on('message', function(user, userID, channelID, message, event) {
    if (message.substring(0, 1) === '!') {

        let command = message.substring(1).split(' ')[0]

        /* List of commands */
        switch (command){
            case 'gamedev':
                bot.sendMessage({
                    to: channelID,
                    message: `Play the Latest version of Goorton's browser game :video_game: : ${devGame}`
                })
                break

            case 'pinglan':
                bot.sendMessage({
                    to: channelID,
                    message: `:computer: Press WINDOWS + R and run: 'ping 104.160.136.3'`
                })
                break
        }
    }
});
