const { Message } = require("discord.js");

    function Np (serverQueue) {
            if (!serverQueue)
            return Message.channel.send ("There is nothing currently playing!");
            if(message.member.voice.channel != message.guild.me.voice.channel)
            return message.channel.send("You are not in the voice channel!")

        let nowPlaying = serverQueue.songs[0];
        let qMsg =  `Now playing: ${nowPlaying.title    
    }