import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

const sentences = [
  "ELE GOOSTA",
  "DANÇA GATINHO, DANÇA",
  "CAVAAAALO",
  "HOJE NÃO, FARO",
];

const data = new SlashCommandBuilder()
  .setName("catchphrase")
  .setDescription("Solta uma frase de efeito do programa do faro");

const execute = async (interaction: CommandInteraction) => {
  const sentence = sentences[Math.floor(Math.random() * sentences.length)];
  await interaction.reply(sentence);
};

export default {
  data,
  execute,
};
