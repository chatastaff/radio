const Discord = require("discord.js");
const fs = require("fs");
require("dotenv").config();
const client = new Discord.Client();

fs.readdir("./events/", (err, files) => {
    files.forEach(file => {
        const eventHandler = require(`./events/${file}`);
        const eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventHandler(client, ...args));
    });
});

client.login("OTE4NzI4ODM0MTY0MDY0MzE2.YbLe5w.g3KCwiZSZ-F8ZYHAFW8xn7A99cY");
