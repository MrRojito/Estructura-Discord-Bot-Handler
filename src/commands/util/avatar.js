module.exports = {
    name: "avatar",
    alias: ["a", "av"],
    run: async (client, message, args) => {
        let mencionado = message.mentions.users.first() || client.users.cache.find(user => user.id === args[0]) || message.author;
        if(mencionado){
            message.channel.send(mencionado.displayAvatarURL({dynamic: true}))
        }
    }
}
