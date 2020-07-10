const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Ready logged in ${client.user.tag}!`);
  client.on("message", async message => {
    if (message.author.bot) return;

    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content
      .slice(config.prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
      const embed = new MessageEmbed()
      .setTitle("Your Title")
      .setColor("RANDOM") // Select Your color .setColor("#fff000")
      .setDescription(`My ping is **${message.createdTimestamp - message.createdTimestamp}ms**`)// This Is ping bots
      .setFooter("Your footer text")
      .setTimestamp();
      message.channel.send(embed);
   }
