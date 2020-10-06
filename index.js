const Discord = require('discord.js')
require('dotenv').config()
const bot = new Discord.Client()

bot.on('ready',()=>{
    console.log('Bot is ready')
    console.log(bot.user.username)
    bot.user.setActivity({type:'PLAYING'},{name:'!verify || Only Spongeyboi can add me.'})
})

bot.on('message',(message)=>{
    if (message.author.bot) return
    if (message.guild===null) return
    if (message.content==='!verify'){
        message.reply('Thanks for verifying. You now have access to the server.').then(msg=>{
            let role = message.guild.roles.cache.find(r=>r.name==='Member')
            message.member.roles.add(role,'User verified.')
            message.delete()
            setInterval(() => {
                msg.delete()
            }, 5000);
        })
    }
    if (message.content==='!message'){
        if (!message.member.user.tag==='Spongeyboi#9416') return;
        const embed = new Discord.MessageEmbed()
        .setTitle(message.guild.name)
        .setDescription('If you are reading this, then that means you aren\'t verified in the server. Wait 10 minutes, then type `!verify`. In the meantime, read '+`<#757978031296872640> to the end to make sure you understand it.`)
        .setColor('YELLOW')
        .setThumbnail(bot.user.displayAvatarURL({format:'png'}))
        message.channel.send(embed)
    }
})

bot.login(process.env.SPTOKEN)