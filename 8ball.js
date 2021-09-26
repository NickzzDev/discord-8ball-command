const Discord = require('discord.js')
exports.run = async (client, msg, args) => {
    let question = args.join(" ")
    if(!question){
        return msg.reply(`You did not specify your Question! :x:`)
    }else{
        let responses = [
            "It is certain",
            "It is decidedly so",
            "Without a doubt",
            "Yes – definitely",
            "You may rely on it",
            "As I see it",
            "yes",
            "Most Likely",
            "Outlook good",
            "Yes",
            "Signs point to yes",
            "never",
            "No.",
            "Nope.",
            "I doubt it",
            "if the sky is blue, then yes.",
        ]
        let Response = responses[Math.floor(Math.random()*(responses.length))]
        let embed = new Discord.MessageEmbed()
        .setTitle("8Ball!")
        .setColor("RANDOM")
        .setDescription('Your Question: '+question+"\nMy Reply: "+Response"\n\nCreated by [Nickzz](https://github.com/NickzzDev/)")
        .setFooter(`${msg.author.username}`, msg.author.displayAvatarURL({ dynamic: true }))
        msg.channel.send({ embeds: [embed] })
    }
}
