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
client.user.setGame(`- Wèlčomè Ťo Our.`,"http://twitch.tv/Mohamed192837465")
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



    client.channels.get("502466166095216641").send(`**- 🍫 # Wèlčomè Ťo Ouُr. **

**# ${member} .**`);

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

                                            if(!message.channel.guild) return message.reply('**- :chocolate_bar: #Wèlčomè Ťo Our.:microphone:.**');

        if (!message.member.hasPermissions(['ADMINISTRATOR'])){

        message.delete()

    return message.reply(`**ممـنوع آلـنشر هـنآ .. روآبـط ديسكـورد.**`)

    }

}

});


  client.on('message', message => {

    if(message.content.includes('youtube')){

                                            if(!message.channel.guild) return message.reply('**- :chocolate_bar: #Wèlčomè Ťo Our.:microphone:.**');

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

     message.channel.send('**تـم حـضره مـن السيرفـر.بسبب نشر روابط ديسكورد** <@' + message.author.id + '>')

     message.delete() 

     }

  }

        if (message.content.startsWith("**تـم حـضره مـن السيرفـر.بسبب نشر روابط ديسكورد**")) {

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

     message.channel.send('**تـم حـضره مـن السيرفـر.روابط يوتيوب** <@' + message.author.id + '>')

     message.delete() 

     }

  }

        if (message.content.startsWith("**تـم حـضره مـن السيرفـر.روابط يوتيوب**")) {

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

client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "اسكت")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();//kinggamer حقوق الفا كودز و 
    if(!mention) return  message.channel.send('').then(msg => { //kinggamer حقوق الفا كودز و 
      msg.delete(3500);
      message.delete(3500);
    });

	if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و 
    });	
	
	if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); //kinggamer حقوق الفا كودز و 

    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);

	
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
	
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و 
    });
    
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **لم يذكر لماذا** ] ";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ]) //kinggamer حقوق الفا كودز و 
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
	.addField('**__وقت الميوت__**',duration)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 //kinggamer حقوق الفا كودز و 
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, //kinggamer حقوق الفا كودز و 
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); //kinggamer حقوق الفا كودز و 
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); //kinggamer حقوق الفا كودز و 
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); //kinggamer حقوق الفا كودز و 
  } 
});
client.on('message', async message => {
	let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);	 //kinggamer حقوق الفا كودز و 
if(command === `تكلم`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))

  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و 
    });

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)

  await kinggamer.removeRole(role) //kinggamer حقوق الفا كودز و 
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);

  return;

  }

});


client.login(process.env.BOT_TOKEN);
