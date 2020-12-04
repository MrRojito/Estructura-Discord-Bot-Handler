module.exports = {
    name: "say",
    alias: ["decir"],
    run: async (client, message, args) => {
        if(!args.join(' ')) return;
        message.delete()
        message.channel.send(args.join(' '))
    }
}
