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
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`- Wèlčomè Ťo Óřş. 🎤`,"http://twitch.tv/Mohamed192837465")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.on('guildMemberAdd', member=> {



    client.channels.get("502466166095216641").send(`**- 🍫 #Wèlčomè Ťo Óřş. 🎤**

**# ${member} .** `);

    });

client.on('message' , message => {

  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "Ping")) {

 message.channel.send('Pong...').then((msg) => {

      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);

 })

  }  

}); 

client.on('message', msg => {

  if (msg.content === 'باك') {

    msg.reply('**ولكـم , آطلق من جا ..**');

  }

});

  client.on('message', message => {

    if (message.content.startsWith("رابط")) {



  message.channel.createInvite({

        thing: true,

        maxUses: 5,

        maxAge: 86400

    }).then(invite =>

      message.author.sendMessage(invite.url)

    )

  message.channel.send("**تم ارسال الرابط برسالة خاصة**")



message.author.send(`**مدة الرابط : يـوم

عدد استخدامات الرابط : 5 **`)





    }

});

	client.on('message', message => {



if (message.author.bot) return;

  if (message.content.split(" ")[0].toLowerCase() === prefix + "قفل") {

                        if(!message.channel.guild) return;



if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You Need MANAGE_MESSAGES Permission').then(message => message.delete(5000))

           message.channel.overwritePermissions(message.guild.id, {

         SEND_MESSAGES: false



           }).then(() => {

 const e = new Discord.RichEmbed()

               .setAuthor('Channel Disabled By : '+message.author.username)

                .setColor('#36393e')

               

               message.channel.send(e)

               });

             }

if (message.content.split(" ")[0].toLowerCase() === prefix + "فتح") {

    if(!message.channel.guild) return;



if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You Need MANAGE_MESSAGES Permission').then(message => message.delete(5000))

           message.channel.overwritePermissions(message.guild.id, {

         SEND_MESSAGES: true



           }).then(() => {

               const e = new Discord.RichEmbed()

               .setAuthor('Channel Enabled By : '+message.author.username)

                        .setColor('#36393e')

               

               message.channel.send(e)

           });

             }







});

client.on('message', msg => {

  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) return;

  let command = msg.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = msg.content.split(" ").slice(1);



    if(command === "مسح") {

        const emoji = client.emojis.find("name", "wastebasket")

    let textxt = args.slice(0).join("");

    if(msg.member.hasPermission("MANAGE_MESSAGES")) {

    if (textxt == "") {

        msg.delete().then

    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها ??```***").then(m => m.delete(3000));

} else {

    msg.delete().then

    msg.delete().then

    msg.channel.bulkDelete(textxt);

        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));

        }    

    }

}

});


  client.on('message', message => {

    if(message.content.includes('discord.gg')){

                                            if(!message.channel.guild) return message.reply('**```- :chocolate_bar: #Wèlčomè Ťo Óřş.:microphone:```.**');

        if (!message.member.hasPermissions(['ADMINISTRATOR'])){

        message.delete()

    return message.reply(`**ممـنوع آلـنشر هـنآ .. روآبـط ديسكـورد.**`)

    }

}

});


  client.on('message', message => {

    if(message.content.includes('youtube')){

                                            if(!message.channel.guild) return message.reply('**```- :chocolate_bar: #Wèlčomè Ťo Óřş.:microphone:```.**');

        if (!message.member.hasPermissions(['ADMINISTRATOR'])){

        message.delete()

    return message.reply(`**ممـنوع آلـنشر هـنآ .. روآبـط يوتيوب.**`)

    }

}

});

client.on('message', message => {

  if (message.content.includes('discord.gg')){

                      if(!message.channel.guild) return message.reply ('')

                  if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){

     message.channel.send('ban <@' + message.author.id + '>')

     message.delete() 

     }

  }

        if (message.content.startsWith("ban ")) {

           if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();

           var member= message.mentions.members.first();

           member.ban().then((member) => {

               message.channel.sendMessage("", {embed: {

               author: {

               },

               title: 'بسبب النشر ' + member.displayName + ' تم حظر',

               color: 490101,

               }

             });

         }

       ) 

     }

 });


client.on('message', message => {

  if (message.content.includes('youtube')){

                      if(!message.channel.guild) return message.reply ('')

                  if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){

     message.channel.send('ban <@' + message.author.id + '>')

     message.delete() 

     }

  }

        if (message.content.startsWith("ban ")) {

           if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();

           var member= message.mentions.members.first();

           member.ban().then((member) => {

               message.channel.sendMessage("", {embed: {

               author: {

               },

               title: 'بسبب النشر ' + member.displayName + ' تم حظر',

               color: 490101,

               }

             });

         }

       ) 

     }

 });

client.on("message", message => {



  if (message.content.startsWith(prefix + "bc")) {

               if (!message.member.hasPermission("ADMINISTRATOR"))  return;

let args = message.content.split(" ").slice(1);

var argresult = args.join(' '); 

message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {

m.send(`${argresult}\n ${m}`);

})

message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 

message.delete(); 

};     

});

client.on('message', message => {

 if (message.content.startsWith('MB')) {

  var norElden= new Discord.RichEmbed()

  .addField('اسم السيرفر ',` **__${message.guild.name}__**`)

      .addField('عدد الاعضاء',`**__${message.guild.memberCount}__**`)

  .setColor('RANDOM')

message.channel.send({ embed: norElden });

  }

});

client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;



  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);



  let args = message.content.split(" ").slice(1);



if (command == "say") {

if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**لا تملك الصلاحيات المطلوبه**");



message.channel.send(args.join("  "))

    message.delete();

  }







});

    client.on('message' , message => {

        if(message.content === 'VO') {

            message.channel.send(`**عدد الاشخاص الموجودين بـ  الرومات الصوتيه : ${message.guild.members.filter(g => g.voiceChannel).size}**`);

        }

        });



client.login(process.env.BOT_TOKEN);
