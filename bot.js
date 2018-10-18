const Discord = require("discord.js")

const moment = require("moment")

const client = new Discord.Client();

const canvas = require("canvas");

const fs = require('fs')

const child_process = require("child_process");

const Rocket = new Discord.Client();

const jimp = require("jimp");// npm i jimp

const package = ('package.json');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const dateFormat = require('dateformat');







const prefix = '$'


///

client.on('ready', () => {
    client.channels.find(c => c.id === '502466502641844226').join();
});


client.on('voiceStateUpdate', (o,n) => {

    if (o.voiceChannel && !n.voiceChannel) {

        ss-=1

        n.guild.channels.get("502466473671786507").edit({

            name : "# Óřş Òńļįńė ☔.: [" + ss+ "]"

        })

    };

    if (n.voiceChannel && !o.voiceChannel) {

        ss+=1

        n.guild.channels.get("502466473671786507").edit({

            name : "# Óřş Òńļįńė ☔.: [" + ss+ "]"

        })

    }

})

client.on("ready", () => {

    client.guilds.get("502191699070812194").members.forEach(m => {

        if (m.voiceChannel) {

            ss+=1

        };

        client.channels.get("502466473671786507").edit({

            name : "# Óřş Òńļįńė ☔.: [" + ss+ "]"

        })

    });

});

client.login(process.env.BOT_TOKEN);
