const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame(`+help `,'https://www.twitch.tv/gamestop13');
      console.log('---------------');
    console.log(' Bot Is Online')
    console.log('---------------')
  });

client.on('message', msg => {
  if (msg.content === 'سلام عليكم') {
    msg.reply('وعليكم سلام');
  }
});
const prefix = "+";

client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 2**`)


    }
});

client.on('message', message => {
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
  if (!args[1]) {
message.channel.send("**+bc <message>**");
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(' The server', `${message.guild.name}`, true)
          .addField(' who sended the messege ', `${message.author.username}!${message.author.discriminator}`, true)
          .addField(' the messege ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.send(`${m}`,{embed: bc});
      });
      const unknown = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('✅| the messege is loading ')
      .addBlankField(true)
      .addField('♨| i got sended to  ', message.guild.memberCount , true)
      .addField('📝| the message ', args)
      .setColor('RANDOM')
      message.channel.sendEmbed(embed);
  }
  } else {
      return;
  }
});

client.on('message', message => {
  if(message.content.includes('discord.gg')){
                                          if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** No Invite Links :angry: !**`)
  }
}
});

client.on('message' , message => {
  var prefix = "+";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "send")) {
    let args = message.content.split(" ").slice(1);


    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("Please Mention the channel!")
    }

    if (!suggestmessage) {
        return message.reply("Plase Give Text To send Channel!")
    
         
    }
     message.delete();
suggestchannel.send("@everyone  `||` @here ");
    let embed = new Discord.RichEmbed()
        .addField("**", `${suggestmessage}`)
        .setFooter(`by ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("✅").then(r => msg.react("❎"))
    });


    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));
    return;
}
});

client.on('message',async message => {
  if(message.content.startsWith(prefix + "setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});


  
  
  

  
  
  client.on('message', message => {
if(message.content == '<@507621570420801537>') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 7000);
}
});
  
  
  

  


client.on("message", (message) => {
  /// ALPHA CODES
 if (message.content.startsWith("+new")) {     /// ALPHA CODES
      const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
      if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
      if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
      message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
          let role = message.guild.roles.find("name", "Support Team");
          let role2 = message.guild.roles.find("name", "@everyone");
          c.overwritePermissions(role, {
              SEND_MESSAGES: true,
              READ_MESSAGES: true
          });    /// ALPHA CODES
          c.overwritePermissions(role2, {
              SEND_MESSAGES: false,
              READ_MESSAGES: false
          });
          c.overwritePermissions(message.author, {
              SEND_MESSAGES: true,
              READ_MESSAGES: true
          });
          message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);
          const embed = new Discord.RichEmbed()
              .setColor(0xCF40FA)
              .addField(`مرحباّ ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم لدينا قريبا للمساعدة.`)
              .setTimestamp();
          c.send({
              embed: embed
          });
      }).catch(console.error);
  }


if (message.content.startsWith("+close")) {
      if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

      message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`*confirm\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)
          .then((m) => {
              message.channel.awaitMessages(response => response.content === '*confirm', {
                      max: 1,
                      time: 10000,
                      errors: ['time'],
                  })    /// ALPHA CODES
                  .then((collected) => {
                      message.channel.delete();
                  })    /// ALPHA CODES
                  .catch(() => {
                      m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                          m2.delete();
                      }, 3000);
                  });
          });
  }

});

client.on('message', message => {       
  if (message.content.startsWith('+clear')) { //xRGRx .. By Julian
      if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!'); 
          if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
          if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
   let args = message.content.split(" ").slice(1)
      let messagecount = parseInt(args);
      if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
      if(!messagecount) args = '100';
      message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
      message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
    }
    });

 

  client.on('message', message => {
    if(message.content === "+info") {
        const embed = new Discord.RichEmbed()
        .setColor("RED")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms') /// By KIllerFox
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**🌐 عدد السيرفرات**' , `${client.guilds.size}`, true)
        .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed); /// By KIllerFox
           }
});

client.on('message', message => {
  if (message.content === "+id") {
  let embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(message.author.avatarURL)
 .addField("Name:",`${message.author.username}`, true)
 .addField('Discrim:',"#" +  message.author.discriminator, true)
 .addField("ID:", message.author.id, true)
 .addField("Create At:", message.author.createdAt, true)
    
    
 message.channel.sendEmbed(embed);
   }
});

client.on('message', message => {
  if (message.content.startsWith("+avatar")) {
if(!message.channel.guild) return;
      var mentionned = message.mentions.users.first();
  var client;
    if(mentionned){
        var client = mentionned; } else {
        var client = message.author;
    }
      const embed = new Discord.RichEmbed()
                         .addField('Requested by:', "<@" + message.author.id + ">")
      .setColor(000000)
      .setImage(`${client.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});

client.on('message', message => {
  if(!message.channel.guild) return;
if (message.content.startsWith('+ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms")
.addField('**WebSocket:**',api + " ms")
message.channel.send({embed:embed});
}
});

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', '⸨𖤐مرحبا𖤐⸩');
  let memberavatar = member.user.avatarURL
    if (!channel) return;
  let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField('•🔰|Name» الإسم',`${member}`)
      .addField('•🌹|Welcome » نورت السيرفر' , `Welcome to the server, ${member}`)
      .addField('•🆔| User » اي دي العضو', "**[" + `${member.id}` + "]**" )
              .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)                     
                                   .addField('•🔮|Server Name » اسم السيرفر', `${member.guild.name}`,true)
  .addField('•🕣|Time Create » مدة انشاء حسابك', member.user.createdAt.toLocaleString(), true)

                                     
   .setFooter("LegendGang")
      .setTimestamp()
 
    channel.sendEmbed(embed);
  });



    client.on('message', message => {
      var prefix = "+";
      if(message.content.startsWith(prefix + 'unmutevoice')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
         
      if(message.mentions.users.size === 0) {
        return message.reply("Please mention a user to mute.");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.reply("Try again.");
      }
      muteMember.setMute(false);
      if(muteMember) {
        message.channel.sendMessage("User muted successfully.");
      }
    }
  });

  client.on('message', message => {
    var prefix = "+";
    if(message.content.startsWith(prefix + 'mutevoice')) {
      if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
      if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
       
    if(message.mentions.users.size === 0) {
      return message.reply("Please mention a user to mute.");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if(!muteMember) {
      return message.reply("Try again.");
    }
    muteMember.setMute(true);
    if(muteMember) {
      message.channel.sendMessage("User muted successfully.");
    }
  }
});

client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('كس مك')){
      message.delete()
    message.channel.sendMessage("", {embed: {
      title: "لا تسب",
      color: 0x06DF00,
      description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
      footer: {
        text: "By GameSTOP"
      }
    }}).then(msg => {msg.delete(4000)});
                        }

   
}); 

client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('امك')){
      message.delete()
    message.channel.sendMessage("", {embed: {
      title: "لا تسب",
      color: 0x06DF00,
      description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
      footer: {
        text: "By GameSTOP"
      }
    }}).then(msg => {msg.delete(4000)});
                        }

   
}); 

client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('عرص')){
      message.delete()
    message.channel.sendMessage("", {embed: {
      title: "لا تسب",
      color: 0x06DF00,
      description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
      footer: {
        text: "By GameSTOP"
      }
    }}).then(msg => {msg.delete(4000)});
                        }

   
}); 




client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('خول')){
      message.delete()
    message.channel.sendMessage("", {embed: {
      title: "لا تسب",
      color: 0x06DF00,
      description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
      footer: {
        text: "By GameSTOP"
      }
    }}).then(msg => {msg.delete(4000)});
                        }

   
}); 




client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('شرموط')){
      message.delete()
    message.channel.sendMessage("", {embed: {
      title: "لا تسب",
      color: 0x06DF00,
      description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
      footer: {
        text: "By GameSTOP"
      }
    }}).then(msg => {msg.delete(4000)});
                        }

   
}); 




client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('متنك')){
      message.delete()
    message.channel.sendMessage("", {embed: {
      title: "لا تسب",
      color: 0x06DF00,
      description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
      footer: {
        text: "By GameSTOP"
      }
    }}).then(msg => {msg.delete(4000)});
                        }

   
}); 

client.on('message' , najzx => {
  var prefix = "+";
  let user = najzx.mentions.users.first()|| client.users.get(najzx.content.split(' ')[1])
  if(najzx.content.startsWith(prefix + 'unban')) {
      if(!najzx.member.hasPermission('ADMINISTRATOR')) return najzx.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
      if(!user) return  najzx.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
      najzx.guild.unban(user);
      najzx.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${najzx.author.id}>`)
      var embed = new Discord.RichEmbed()
      .setThumbnail(najzx.author.avatarURl)
      .setColor("RANDOM")
      .setTitle('**Unban** !')
      .addField('**User Unban :** ', `${user}` , true)
      .addField('**By :**' ,       ` <@${najzx.author.id}> ` , true)
      .setAuthor(najzx.guild.name)
     .setFooter('Requested by '+najzx.author.username, najzx.author.avatarURL)
      najzx.channel.sendEmbed(embed)
  }
});











client.on('message', function(msg) {
  const prefix = '+'
  if(msg.content.startsWith ('+server')) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`Showing Details Of  **${msg.guild.name}*`)
    .addField('🌐** server type**',`[** __${msg.guild.region}__ **]`,true)
    .addField('🏅** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
    .addField('🔴**__ Members Number__**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField('🔵**__ Members Number who online__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField('📝**__ Text Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField('🎤**__ voice Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField('👑**__ The Owner__**',`**${msg.guild.owner}**`,true)
    .addField('🆔**__ Server ID__**',`**${msg.guild.id}**`,true)
    .addField('📅**__The date when the server created __**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});

client.on('message', message => {
  if (message.content.startsWith("+bans")) {
      message.guild.fetchBans()
      .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
.catch(console.error);
}
});

client.on('message', message => {
  var prefix = "+";
         if(message.content === prefix + "mutechat") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**__تم تقفيل الشات__ ✅ **")
                });
                  }
  //FIRE BOT
      if(message.content === prefix + "unchat") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**__تم فتح الشات__✅**")
                });
      }
         
  });
  
  

client.on('message', message => {
  var prefix = "+";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
if (message.member.hasPermission("MOVE_MEMBERS")) {
if (message.mentions.users.size === 0) {
return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
if (message.mentions.members.first().voiceChannel != null) {
var authorchannel = message.member.voiceChannelID;
var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
.setTitle("Succes!")
.setColor("#000000")
.setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
.setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
}}});

client.on('message', message => {
  var prefix = "+"
if (message.author.x5bz) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "kick") {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
       
if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
let user = message.mentions.users.first();
let reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
if(!reason) return message.reply ("**اكتب سبب الطرد**");
if (!message.guild.member(user)
.kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

message.guild.member(user).kick();

const kickembed = new Discord.RichEmbed()
.setAuthor(`KICKED!`, user.displayAvatarURL)
.setColor("RANDOM")
.setTimestamp()
.addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
.addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
.addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
message.channel.send({
  embed : kickembed
})
}
});

client.on('message', message => {
  if (!message.channel.guild) return;
if(message.content =='+count')
var SaifDz = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setFooter(message.author.username, message.author.avatarURL)
.setTitle('🌷| Members info')
.addBlankField(true)
.addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
message.channel.send(SaifDz);
});

client.on('message', message => {
  if (message.content.startsWith("+bot")) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .setTitle('``INFO Morro Bot`` ')
          .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
          .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
          .addField('``servers``', [client.guilds.size], true)
          .addField('``channels``' , `[ ${client.channels.size} ]` , true)
          .addField('``Users``' ,`[ ${client.users.size} ]` , true)
          .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
          .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                .addField('``My Prefix``' , `[ + ]` , true)
                .addField('``My Language``' , `[ Java Script ]` , true)
                .setFooter('By |GameSTOP')
  })
}
});

client.on('message', message => {
  var prefix = "+";
        if(message.content === prefix + "hchn") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: false
   })
                message.channel.send('Channel Hided Successfully ! ✅  ')
   }
  });

  client.on('message', message => {
    var prefix = "+";
          if(message.content === prefix + "schn") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: true
     })
                  message.channel.send('Done  ')
     }
    });

const weather = require('weather-js');
 client.on('message', message => {
     if(message.content.startsWith(prefix + "w")) {
         var args = message.content.split(" ").slice(1);
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('**Please enter a location!**')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Weather for ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Timezone',`UTC${location.timezone}`, true)
          .addField('Degree Type',location.degreetype, true)
          .addField('Temperature',`${current.temperature} Degrees`, true)
          .addField('Feels Like', `${current.feelslike} Degrees`, true)
          .addField('Winds',current.winddisplay, true)
          .addField('Humidity', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}
 });

 client.on('guildMemberAdd', (member) => {
  member.addRole(member.guild.roles.find('name', 'not active'));
  });
  
  
  client.on('message', message => {                      
      if(!message.channel.guild) return;
         if(message.content.startsWith(prefix + 'active')) {
          let modlog = client.channels.find('name', 'التفعيل');
         if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
         message.channel.sendMessage(`اضغط على الصح عشان تتفعل`).then(msg => {
          
          
          msg.react('✅')
         .then(() => msg.react('✅'))
       
       
  
         let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
       
         let active = msg.createReactionCollector(activeFilter, { time: 15000 });
       
                                                          
                                 active.on("collect", r => {
                                     message.member.addRole(message.guild.roles.find("name", "6"));
                                     message.member.removeRole(message.guild.roles.find("name", "not active"));
                                     msg.delete();
                                     message.channel.send(`**تم تفعيلك استمتع.**`).then(m => m.delete(1000));
       
                                     })
                                     })
                                     }
                                     });

                                     
                                     
                                    
client.on('guildCreate', guild => {
    
  client.channels.get("510754331562082305")
const embed = new Discord.RichEmbed()
   .setAuthor(`بوتك دخل سيرفر جديد مبروك ✅`)
   .setDescription(`**
Server name: __${guild.name}__
Server id: __${guild.id}__
Server owner: __${guild.owner}__
Member Count: __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__**`)
         .setColor("#f3ae10")
         .addField("New Server!")
         .setFooter('اسم البوت' , client.user.avatarURL)
           client.channels.get("510754331562082305").send({embed});
}

);

client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('.com')){
    if(!message.member.hasPermission('MANAGE_MESSAGE'))
      message.delete()
  return message.reply(`**ممنوع نشر الروابط من فضلك تجنبا للميوت:x:**`)
  }
});

client.on('message', message => {
  const devs = ['510735211215192075', 'none'];
  let args = message.content.split(' ').slice(1).join(' ');
  if (message.content.startsWith('+devc')){
  if(!message.author.id === '') return;
  message.channel.sendMessage('جار ارسال الرسالة :white_check_mark:')
  client.users.forEach(m =>{
  m.sendMessage(args)
  })
  }
  });


  const fs = require('fs'); // npm i fs
  const ms = require('ms'); // npm i ms
  const cool = [];
  client.on('message',async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
  
    const args = message.content.split(' ');
    const credits = require('./credits.json');
    const path = './credits.json';
    const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
    const mentionn = message.mentions.users.first() || client.users.get(args[1]);
    const author = message.author.id;
    const balance = args[2];
    const daily = Math.floor(Math.random() * 350) + 10;
  
    if(!credits[author]) credits[author] = {credits: 50};
    if(!credits[mention.id]) credits[mention.id] = {credits: 50};
    fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
  
    
    if(message.content.startsWith(prefix + "credit")) {
    if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
  
    if(args[2]) {
      if(isNaN(args[2])) return message.channel.send('**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**');
      if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
      if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
      if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**');
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
  
      var number = `${one}${two}${three}${four}`;
      
      message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
        message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
          if(c.first().content === number) {
            m.delete();
            message.channel.send(`**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`);
            credits[author].credits += (-balance);
            credits[mention.id].credits += (+balance);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
          } else if(c.first().content !== number) {
            m.delete();
            message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
          }
        });
      });
    }
    if(!args[2]) {
      if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
      message.channel.send(`**${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}`);
    } 
    
    }
    if(message.content.startsWith(prefix + "daily")) {
      if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \`${moment().startOf('day').locale('ar-eg').fromNow().replace('منذ', 'بعد')}\` , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);
      if(mentionn) {
        var one = Math.floor(Math.random() * 9) + 1;
        var two = Math.floor(Math.random() * 9) + 1;
        var three = Math.floor(Math.random() * 9) + 1;
        var four = Math.floor(Math.random() * 9) + 1;
    
        var number = `${one}${two}${three}${four}`;
  
        message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {
          message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
            if(collected.first().content === number) {
              m.delete();
              collected.first().delete();
              credits[mentionn.id].credits += (+daily);
              fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
  
            message.channel.send(`**:atm: | \`${daily}\`, تم تسليم المبلغ**`);  
            }
            if(collected.first().content !== number) {
              return m.delete();
            }
          });
        });
      } else if(!mentionn) {
        credits[author].credits += (+daily);
        fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
  
        message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
      }
      cool.unshift(message.author.id);
  
      setTimeout(() => {
        cool.shift(message.author.id);
        message.author.send("**:atm: | \`Daily\`, يمكنك الحصول على الكردت المجانية الان**").catch();
      }, ms("1d"));
    }
  });


  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**تم الأرسال في الخاص**');
            
	
		 


 message.author.sendMessage(`
 **
__~~Zenox Bot~~__ By: îLüvĢãMéStØP乡#6898

╔[❖════════════❖]╗
             Prefix = ' + '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝

 ❖ +clear ➾  to clear chat

 ❖ +info ➾ to see server info
 
 ❖ +bc <message>  ➾  to bordecast all

 ❖ +send ➾ in channel vote

 ❖ +setvoice ➾ voice online

 ❖ +mute     ➾ to muted

 ❖ +unmutevoice  ➾ to unmutevoice

 ❖ +deafen  ➾ to deafen

 ❖ +undeafen ➾  to undeafen

 ❖ +unban ➾  to unban

 ❖   +server   ➾  to see server info 2X

 ❖   +bans   ➾ to see all bannd

 ❖  +mutechat  ➾ to mute chat

 ❖ +unchat  ➾   to unmute chat

 ❖   +move   ➾  to move member

 ❖ +kick   ➾ to kicked members

 ❖  +count   ➾ to see members in the server

 ❖ +bot    ➾  to see bot info

 ❖ +hchn  ➾  to invzblty channels
  
 ❖ +schn    ➾ to uninvzblty channels  

╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝

❖ +credit ➾  to see your credit 

❖ +daily ➾ to get your daily

❖ +ping ➾ to see your ping

❖ +avatar ➾ to see your avatar

❖ $id ➾  to see your id

❖ +tag ➾ to see your tag

❖ +new  ➾ to create ticket

❖ رابط ➾  يعطيك رابط السيرفرت

❖ +data ➾ to see you data

❖ +w <location> ➾  to see your weather

❖ +server  ➾  معلومات عن سيرفر 

❖  +bot  ➾  معلومات عن بوت 
╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝

==================================================================

Server Support : https://discord.gg/twdG45J

==================================================================

Bot Website :soon قريبا ..........
==================================================================

`);

    }
});

client.login(process.env.BOT_TOKEN);
