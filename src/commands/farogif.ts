import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { getRandomGIF } from "../utils/getRandomGIF";

const data = new SlashCommandBuilder()
  .setName("farogif")
  .setDescription("Manda um GIF bala do faro");

const execute = async (interaction: CommandInteraction) => {
  await interaction?.reply({
    files: [getRandomGIF()],
  });
};

export default {
  data,
  execute,
};
