const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const PREFIX = "/";
const EVERYONE = "@";
const YouTube = require("simple-youtube-api")
const newUsers = [];
var client = new Discord.Client();

const youtube = new YouTube("AIzaSyDE684AY4Th50yKvN7lZ9GroJiFvF5yjy8");

const queue = new Map();

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function () {
  var games = [
        "/help | REX'BOT V2",
        "Développé par xVirus",
        "https://twitter.com/rexclantv",
        "" + new Date(),
        bot.users.size + " utilisateurs !"
    ]
        bot.user.setActivity(setInterval(function() {
        bot.user.setActivity(games[Math.floor(Math.random() * games.length)], {url:"https://www.twitch.tv/REX'BOT", type: "STREAMING"})
    }, 3000))

    
    console.log("*``*___*``*");
    console.log("REX'BOT - Connecté");
        console.log("*``*___*``*");
});

        if(message.content === 'Roll0000000') {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("Vous n'avez pas la permission d'exécuter cette commande ! :x:");
        const args = message.content.split(" ");
        const num1 = 0;
        const num2 = 100;
        const numberGenerated = Math.floor(Math.random() * parseInt(num2) + num1);
        console.log("Le bot a généré le chiffre: " + numberGenerated + " !");
        message.reply("Le bot a généré le chiffre:  **" + numberGenerated  +  "**  ! Bravo au gagnant :D");
            message.delete();
        }    
    
      if (message.channel.type === "xVirus" || message.channel.type === "xvirus" || message.channel.type === "xVirus") return message.reply(message.author.username + "Salut, xVirus est en ce moment pas connecté, merci de lui contacter en MP.");

bot.on("guildMemberAdd", function(member) {               
    member.addRole(member.guild.roles.find("name", "VISITEUR"));
    var games = [
    "/help | REX'BOT V1",
    "Développé par xVirus",
    "https://twitter.com/rexclantv",
    " " + new Date(),
     bot.users.size + " utilisateurs !"
 ]
  bot.user.setActivity(setInterval(function() {
  bot.user.setActivity(games[Math.floor(Math.random() * games.length)], {url:"https://www.twitch.tv/rexbot", type: "STREAMING"})
  }, 3000))
  
 member.guild.channels.find("name", "join-left").sendMessage("", {    
            embed: {
                color: 0x008242,
                author: '',
                title: '', 
                description: '', 
                fields: [
                    {
                        name: member.displayName,
                        value: 'a rejoint :white_check_mark: ',
                        inline: false
                   }],                     
                                   footer: {
            text: 'Bievenue à toi ! :D',
          },
            }
 });
});

bot.on("guildMemberRemove", function(member) {
    
    var games = [
    "/help | REX'BOT V1",
    "Développé par xVirus",
    "https://twitter.com/rexclantv",
    " " + new Date(),
     bot.users.size + " utilisateurs !"
 ]
  bot.user.setActivity(setInterval(function() {
  bot.user.setActivity(games[Math.floor(Math.random() * games.length)], {url:"https://www.twitch.tv/rexbot", type: "STREAMING"})
  }, 3000))
    
 member.guild.channels.find("name", "join-left").sendMessage("", {    
            embed: {
                color: 0x008242,
                author: '',
                title: '', 
                description: '', 
                fields: [
                    {
                        name: member.displayName,
                        value: 'a quitté le serveur :x:',
                        inline: false
                   }],                     
                                   footer: {
            text: 'À Bientôt !',
          },
            }
 });
    
});


bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split (" ");

    var args2 = message.content.split(" ").slice(1);

    var suffix = args2.join(" ");

    var reason = args2.slice(1).join(" ");
    
    var reasontimed = args2.slice(2).join(' ')


    var user = message.mentions.users.first();
    
    var guild = message.guild;
    
    var member = message.member;

    var roleJoueur= member.guild.roles.find("name", "VISITEUR")
    
    var roleMute = member.guild.roles.find("name", "MUTED")
    
    var modlog = member.guild.channels.find("name", "log")
    
    var user = message.mentions.users.first();
    
    const serverQueue = queue.get(message.guild.id);

    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

    switch (args[0].toLowerCase()) {
        case "membres":
      		message.channel.send("", {    
            embed: {
                color: 0x008242, 
                author:  message.author.name,
                title: '', 
                description: '', 
                fields: [
                    {
                        name: "Voici le nombre d'utilisateurs sur le discord !",
                        value: bot.users.size + '',
                        inline: false
                   }],                     
                                   footer: {
            text: '',
          },
            }
        });
           
        break
        case "unmute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
        if(!modlog) return message.reply("Je ne trouve pas de channel log.");
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("À qui je retire le mute?")
        member.removeRole(roleMute)
        message.channel.sendMessage(user.toString() + " a bien été unmute.")
        
        var embed = new Discord.RichEmbed()
        .addField("Commande :", "UNMUTE")
        .addField("Utilisateur :", user.username)
        .addField("Modérateur :", message.author.username)
        .addField("Heure:", message.channel.createdAt)
        .setColor("#008242")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "log").sendEmbed(embed);
            
                                    user.send("" , {    
            embed: {
                color: 0x008242,
                author: '',
                title: '', 
                description: '', 
                fields: [
                    {
                        name: user.username,
                        value: "Vous avez été **unmute**",
                        inline: false
                   }],                     
                                   footer: {
            text: "Le " + message.channel.createdAt,
          },
            }
 });
            message.delete();
            
                                        message.channel.sendMessage("" , {    
            embed: {
                color: 0x008242,
                author: '',
                title: '', 
                description: '', 
                fields: [
                    {
                        name: user.username,
                        value: "a bien été unmute",
                        inline: false
                   }],                     
                                   footer: {
            text: "Le " + message.channel.createdAt,
          },
            }
 });
            message.react("✅")
        break;
            
        case "mute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu n'as pas la permission.");
        if(!modlog) return message.reply("Je ne trouve pas de channel log.");  
        let time = parseInt(args2[1]) * 60000;
        if(!time) return message.reply("Tu as oublié le temps.")
        if (!reasontimed) return message.reply("Tu as oublié la raison.")
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Quelle personne dois-je mute?")
        message.channel.sendMessage(member.toString() + " a bien été mute.")
        member.addRole(roleMute)
        setTimeout(() => { member.removeRole(roleMute); }, time);

        var embed = new Discord.RichEmbed()
        .addField("Action :", "Mute")
        .addField("Utilisateur :", user.toString())
        .addField("Modérateur :", message.author.toString())
        .addField("Raison :", reasontimed)
        .addField("Temps de la sanction :", args2[1] + " minute(s)")
        .setColor("#008242")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "log").sendEmbed(embed);  
                        user.send("" , {    
            embed: {
                color: 0x008242,
                author: '',
                title: '', 
                description: '', 
                fields: [
                    {
                        name: user.username,
                        value: "Vous avez été mute " + args2[1] + " minute(s) pour: " + reasontimed,
                        inline: false
                   }],                     
                                   footer: {
            text: "Le " + message.channel.createdAt,
          },
            }
 });
            message.delete();
            
                                        message.channel.sendMessage("" , {    
            embed: {
                color: 0x008242,
                author: '',
                title: '', 
                description: '', 
                fields: [
                    {
                        name: user.username,
                        value: "a bien été mute " + args2[1] + " minute(s) pour: " + reasontimed,
                        inline: false
                   }],                     
                                   footer: {
            text: "Le " + message.channel.createdAt,
          },
            }
 });
            message.react("✅")
        break;
            case "help":
            var embed = new Discord.RichEmbed()
                .addField("/ban", "Cette commande permet de bannir un utilisateur ! Pour l'utiliser, faites /ban @(utilisateur) (raison)")
                .addField("/kick", "Cette commande permet de kick un utilisateur ! Pour l'utiliser, faites /kick @(utilisateur) (raison)")
                .addField("/purge", "Cette commande permet de supprimé des messages beaucoup plus rapidement ! Pour l'utiliser, faites /purge (nombredemessages)")
                .addField("/mute", "Cette commande permet de muté un utilisateur pendant un certain temps. Pour l'utiliser, faites /mute @(utilisateur) (temps) (raison)")
                .addField("/unmute", "Cette commande permet d'unmute un utilisateur. Pour l'utiliser, faites /unmute @(utilisateur)")
                .addField("/ping", "Grâce à cette commande, tu pourras savoir ton ping ! -> bot.ping")
                .addField("/twitter", "Vous donne le twitter de la REX CLAN !")
                .addField("/play", "Écouter de la musique! Pour l'utiliser, faites /play (url)")
                .addField("/skip", "Sauter une musique !")
                .addField("/stop", "Arrêter la musique !")
                .addField("/pause", "Mettre la musique en pause !")
                .addField("/unpause", "Relancer la musique en pause!")
                .setColor("#008242")
                .setFooter("Idée de commande ? Proposer en MP!")
                .setAuthor(message.author.username, message.author.avatarURL)
                .setDescription("Voici les commandes du bot !")
                .setTimestamp()
                message.delete()
                message.channel.sendEmbed(embed);
            break;               
        case "kick":
            
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande. :x:");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu n'as pas mis son pseudo au complet ! :o")
            message.guild.member(user).kick();
            message.channel.send(user.toString() + " a bien été kick.")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "KICK")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#008242")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);381242462053728267
            bot.channels.get('387078781866606593').sendMessage(":white_check_mark: Le joueur " + user.username + " à bien été kick pour: " + reason);
                       user.send("" , {    
            embed: {
                color: 0x008242,
                author: '',
                title: '', 
                description: '', 
                fields: [
                    {
                        name: user.username,
                        value: "Vous avez été kick pour: " + reason,
                        inline: false
                   }],                     
                                   footer: {
            text: "Le " + message.channel.createdAt,
          },
            }
 });
            message.delete();
            
                                        message.channel.sendMessage("" , {    
            embed: {
                color: 0x008242,
                author: '',
                title: '', 
                description: '', 
                fields: [
                    {
                        name: user.username,
                        value: "a bien été kick pour:" + reason,
                        inline: false
                   }],                     
                                   footer: {
            text: "Le " + message.channel.createdAt,
          },
            }
 });
            message.react("✅")
            break;
        case "ban":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois bannir..")
            
            message.guild.ban(user, 2);
            message.channel.send(user.toString() + " a bien été banni.")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "BAN")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#008242")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            
            bot.channels.get('387078781866606593').sendMessage(":white_check_mark: Le joueur " + user.username + " à bien été ban pour: " + reason);
            user.send("" , {    
            embed: {
                color: 0x008242,
                author: '',
                title: '', 
                description: '', 
                fields: [
                    {
                        name: user.username,
                        value: "Vous avez été bannis pour:" + reason,
                        inline: false
                   }],                     
                                   footer: {
            text: "Le " + message.channel.createdAt,
          },
            }
 });
            message.delete();
            
                                        message.channel.sendMessage("" , {    
            embed: {
                color: 0x008242,
                author: '',
                title: '', 
                description: '', 
                fields: [
                    {
                        name: user.username,
                        value: "a bien été bannis pour: " + reason,
                        inline: false
                   }],                     
                                   footer: {
            text: "Le " + message.channel.createdAt,
          },
            }
 });
            message.react("✅")
            break;
            
            case "warn":
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois warn..")
            
            
            message.channel.send(user.toString() + " a bien été warn.")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "WARN")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#008242")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            
            bot.channels.get('387078781866606593').sendMessage(":white_check_mark: Le joueur " + user.username + " à été warn pour: " + reason);
            message.author.send("Vous avez été warn pour: **`" + reason + "** Si vous continuer, vous risquez de vous faire bannir.");
            message.delete();
            
                               message.channel.sendMessage("" , {    
            embed: {
                color: 0x008242,
                author: '',
                title: '', 
                description: '', 
                fields: [
                    {
                        name: user.username,
                        value: "a bien été warn pour: " + reason,
                        inline: false
                   }],                     
                                   footer: {
            text: "Le " + message.channel.createdAt,
          },
            }
 });
            message.react("✅")
            break;
        case "purge":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            var messagecount = parseInt(args2.join(" "));
            if(!messagecount) return message.channel.send("Tu dois mettre un certain nombre de messages.")
            message.channel.fetchMessages({
                limit: messagecount
            }).then(messages => message.channel.bulkDelete(messagecount));
                        message.delete()
            var embed = new Discord.RichEmbed()
            .addField("Commande :", "PURGE")
            .addField("Modérateur :", message.author.username)
            .addField("Message supprimé", messagecount)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#008242")
            .setFooter("Ouf ! Sa as fait un bon ménage dans le channel ! ^^")
            message.delete()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            
                   message.channel.sendMessage("" , {    
            embed: {
                color: 0x008242,
                author: '',
                title: '', 
                description: '', 
                fields: [
                    {
                        name: messagecount,
                        value: " messages ont bien été effacés ✅",
                        inline: false
                   }],                     
                                   footer: {
            text: "Le " + message.channel.createdAt,
          },
            }
 });
           message.react("✅")
            break;;
    
        case "invite":
            		message.channel.send("", {    
            embed: {
                color: 0x008242, 
                author:  message.author.name,
                title: '', 
                description: '', 
                fields: [
                    {
                        name: '**Lien pour invitation discord**',
                        value: 'https://discord.gg/Tmg2Aud',
                        inline: false
                   }],                     
                                   footer: {
            text: 'Partager ce lien à tous vos amis!',
          },
            }
        });
            break;

       case "twitter":
       message.channel.sendMessage("" , {    
            embed: {
                color: 0x008242,
                author: '',
                title: '', 
                description: '', 
                fields: [
                    {
                        name: "Voici le Twitter de la REX'Clan !",
                        value: 'http://twitter.com/RexClanTV',
                        inline: false
                   }],                     
                                   footer: {
            text: "N'hésite pas à suivre le compte !",
          },
            }
 });
       break;

       case "ping":
        message.channel.sendMessage("Pong! Le bot a actuellement `" + bot.ping + " ms !` :D");
        message.delete();
        break;
            //Images Aléatoire
            
            message.channel.sendMessage("Commande invalide ^^ Fait /help pour voir toutes les commandes disponibles !")
    }
});



bot.login(process.env.TOKEN);
