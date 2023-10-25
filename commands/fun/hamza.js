const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hamza")
    .setDescription("chi 7aja 3la hamza w safi"),
  async execute(interaction) {
    const hamzaReplies = ["Fhmti lblan ?", "Salam chno smitk ?"];

    // picks random description from array
    await interaction.reply(
      hamzaReplies[Math.floor(Math.random() * hamzaReplies.length)]
    );
  },
};
