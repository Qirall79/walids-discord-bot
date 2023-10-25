const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("abdo")
    .setDescription("Chi 7aja 3la abdo w safi"),
  async execute(interaction) {
    const abdoReplies = ["Wa 3wej", "Exhaust f aram = gay", "Keyboard warrior"];

    // picks random description from array
    await interaction.reply(
      abdoReplies[Math.floor(Math.random() * abdoReplies.length)]
    );
  },
};
