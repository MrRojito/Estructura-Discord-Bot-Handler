const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "USER", "REACTION"], allowedMentions: { parse: [] } });
client.comandos = new Discord.Collection();
client.config = require('./config.js');
let { readdirSync } = require('fs');

// Comandos ;)
for(const category of readdirSync('./commands')){
    let carpetaName = category.substring(0);
    for(const file of readdirSync(`.commands/${carpetaName}`))
    if(file.endsWith('.js')){
        let fileContents = require(`.commands/${carpetaName}/${file}`); 
        client.comandos.set(fileContents.name, fileContents);
        fileContents.alias.forEach(alias => {
            client.comandos.set(alias, fileContents)
        });
    }
}

// Eventos ;)
for(const file of readdirSync('./events')){
    if(file.endsWith(".js")){
        let fileName = file.substring(0, file.length - 3); 
        let fileContents = require(`./events/${file}`); 
        client.on(fileName, fileContents.bind(null, client)); 
    }
}

// Discord Login
client.login(process.env.token)
.then(() => console.log('¡Sesión iniciada correctamente!'))
.catch(err => console.log('Error al iniciar sesión: '+err));
