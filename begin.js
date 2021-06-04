const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";





client.on("message", (
  message 
) => {

    if(message.author.bot) return;
if (message.member.roles.cache.some((r) => r.id == "840784139526733834")) // ايدي الرتبه
      return;
  
if (message.channel.id == "840792011555471390") {
    
    let embed = new Discord.MessageEmbed() 
      .setTitle(`Suggestion`, message.author.avatarURL)
      .setColor("#070807")
      .setDescription(`${message.content}`) 
    .setFooter(`${message.author.username}#${message.author.discriminator}  " ID: ${message.author.id}`, `${message.author.displayAvatarURL()}` )
    message.delete(); 
    message.channel.send(embed). then(message => {
   message.react("<:PRINCE_yes:841022584128929812> ")
message.react("<:PRINCE_no:841022638159822868> ")
  })
  }
})








client.on('message', message => {   
     if (message.content === prefix + "ping") {
      const embed = new Discord.MessageEmbed()
  //Budz :)
  .setColor("GREEN")
  .addField('**\`The Bot Ping Is\`**',`${client.ws.ping}ms`)
 .setFooter(`Created by ${message.author.username}`)
        message.channel.send(embed)
    }
  })


var statuss = ["Insta: 9wxq_","Twich: prince15_","Love u <3"]; 
var secound = 5; 

client.on("ready", () =>{
  var timeing = Math.floor(secound*1000);
  setInterval(function(){
    var ammount = statuss.length;
    var num = Math.floor(Math.random() * ammount);
    client.user.setActivity(statuss[num], {type: 'COMPETING'})
  }, timeing)
});









client.on('message', message=>{
  if(message.content.startsWith(prefix + 'bot')) {
const bot = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(`\`\`\`${client.user.username} Information\`\`\``)
.setThumbnail(client.user.displayAvatarURL())
.addField(`**Bot Name**`, client.user.tag)
.addField(`**Bot Servers**`, client.guilds.cache.size)
.addField(`**Bot Channels**`, client.channels.cache.size)
.addField(`**Bot Users**`, client.users.cache.size)
.addField(`**Bot ID**`, client.user.id)
.setFooter(message.guild.name, message.guild.iconURL())
message.channel.send(bot);
  }
});





client.on('message', msg => {
  if(msg.content == "السلام عليكم") {
    msg.reply(" ** وعليكم السلام ورحمة الله وبركاته **");
  }
})








client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('╔[════════════]╗')
  console.log(`${client.user.username} Is Online`)
  console.log('╚[════════════]╝')
});






client.login("ODUwMDczMjk2NjQ0NDcyODcz.YLkacw.jUvINhczsy1E7bc9jDx52D5Pu_A"); 