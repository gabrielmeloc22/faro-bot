import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

const data = new SlashCommandBuilder()
  .setName("farogif")
  .setDescription("Manda um GIF bala do faro");

const gifs = [
  "https://thumbs.gfycat.com/JoyousEnlightenedAntipodesgreenparakeet-max-1mb.gif",
  "https://c.tenor.com/pFKXm8b0drQAAAAd/rodrigo-faro-gugu.gif",
];

const execute = async (interaction: CommandInteraction) => {
  const gif = gifs[Math.floor(Math.random() * gifs.length)];
  console.log(gif);
  await interaction?.reply({
    files: [gif],
  });
};

export default {
  data,
  execute,
};
