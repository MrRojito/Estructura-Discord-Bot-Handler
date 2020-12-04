module.exports = {
    name: "ban",
    alias: [],
    run: async (client, message, args) => {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('¡No tienes permisos para utilizar este comando!');

        let usuario = message.mentions.users.first() || client.users.cache.find(user => user.id === args[0]);
        if(!usuario) return message.reply('Dime. ¿A quien tengo que banear?');

        if(usuario){
            const member = message.guild.member(usuario);
            if(member){
                member.ban({reason: '¡Se lo merecia!'})
                .then(() => {
                    message.reply(`**${usuario.tag}** Fue baneado correctamente del servidor!`)
                    return console.log(`${usuario.tag} fue baneado del servidor ${message.guild.name}`)
                })
                .catch(err => {
                    message.reply('¡Ocurrió un error!')
                    console.log(err)
                })
            } else {
                return message.reply('¡No pude encontrar a ese usuario en este servidor!')
            }
        } else {
            return message.reply('Menciona a alguien para banearlo!')
        }
    }
}
