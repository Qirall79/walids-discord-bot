const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hayat")
    .setDescription("chi 7aja 3la hayat w safi"),
  async execute(interaction) {
    // picks random description from array
    await interaction.reply("Dkhlo l'ADAM nzhaw");
  },
};
