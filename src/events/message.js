module.exports = async (client, message) => {
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;
    if(!message.content.startsWith(client.config.prefix)) return;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd = client.comandos.get(command);
    if(!cmd) return;

    cmd.run(client, message, args);
}
