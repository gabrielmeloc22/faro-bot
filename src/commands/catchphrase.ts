import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("catchphrase")
    .setDescription("Solta uma frase de efeito do programa do faro"),
  async execute(interaction: CommandInteraction) {
    await interaction.reply("ELE GOSTA");
  },
};
