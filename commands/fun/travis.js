const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("travis")
    .setDescription("nokat walid"),
  async execute(interaction) {
    // picks random description from array
    await interaction.reply("Travis Dwi!");
  },
};
