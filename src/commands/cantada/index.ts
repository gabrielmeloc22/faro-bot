import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { create as createUser } from "../../services/user/create";
import { buttons } from "./buttons";
import { cantadaEmbed } from "./embed";

const data = new SlashCommandBuilder()
  .setName("cantada")
  .setDescription("Uma escolha ousada")
  .addUserOption((option) =>
    option.setName("user").setDescription("O(a) pretendente").setRequired(true)
  )
  .addStringOption((option) =>
    option.setName("cantada").setDescription("Sua cantada").setRequired(true)
  );

const execute = async (interaction: CommandInteraction) => {
  const cantada = interaction.options.getString("cantada");
  const { id: userId } = interaction.options.getUser("user") ?? {};

  if (!cantada || !userId) return;

  await interaction.reply({
    content: "CAVALO",
    ephemeral: true,
  });

  await createUser({
    discordId: interaction.user.id,
    name: interaction.user.username,
    bio: "teste",
  });

  const message = await interaction.channel?.send({
    embeds: [cantadaEmbed(cantada, userId)],
    components: [buttons],
  });

  return message;
};

export default {
  data,
  execute,
};
