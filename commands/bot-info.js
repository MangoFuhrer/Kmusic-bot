const Discord = require('discord.js')
const db = require('megadb');
let prefix_db = new db.crearDB('prefixes');

module.exports = {
    nombre: 'bot-info',
    alias: [],
    descripcion: 'Este comando te permite ver la informacion del bot',
    run: (client, message, args) => {


const embed = new Discord.MessageEmbed()

.setColor('0x00F2FF')
.setThumbnail(client.user.displayAvatarURL({size: 2048}))
.addField('Bot Name', client.user.username, true)
.addField('Tag', `**#${client.user.discriminator}**`, true)
.addField('ID', client.user.id, true)
.addField('Bot Create', client.user.createdAt)
.addField('Currently Servers', client.guilds.cache.size)
.addField('Creator', `MangoFuhrer#0758 `)
.setTimestamp()

message.channel.send(embed)

  }
}
