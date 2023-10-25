const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("maher")
    .setDescription("nokat walid"),
  async execute(interaction) {
    // picks random description from array
    await interaction.reply("Maher Khayb!");
  },
};
