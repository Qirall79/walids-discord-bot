const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("walid")
    .setDescription("Chi 7aja 3la walid"),
  async execute(interaction) {
    const walidReplies = ["nassaraho lah", "lah ybark f3mer sidi"];

    // picks random description from array
    await interaction.reply(
      walidReplies[Math.floor(Math.random() * walidReplies.length)]
    );
  },
};
