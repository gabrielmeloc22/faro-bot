import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { getOrCreate as getOrCreateUser } from "../services/user/getOrCreate";

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
  const user = await getOrCreateUser({
    discordId: interaction.user.id,
    name: interaction.user.username,
  });

  if (user?.commandBanned) return;

  const sentence = sentences[Math.floor(Math.random() * sentences.length)];
  await interaction.reply(sentence);
};

export default {
  data,
  execute,
};
