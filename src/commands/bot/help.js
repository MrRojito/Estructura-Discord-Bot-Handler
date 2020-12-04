module.exports = {
    name: "help",
    alias: ["commands", "ayuda"],
    run: async (client, message, args) => {
        message.reply('No tengo comandos por el momento 😔')
    }
}
