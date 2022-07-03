import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, User } from "discord.js";
import { Cantada } from "../../model/cantada";
import { getOrCreate as getOrCreateUser } from "../../services/user/getOrCreate";
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
  const user: User | null = interaction.options.getUser("user");

  if (!cantada || !user) return;

  const [author, target] = await Promise.all([
    getOrCreateUser({
      discordId: interaction.user.id,
      name: interaction.user.username,
    }),
    getOrCreateUser({
      discordId: user.id,
      name: user.username,
    }),
  ]);

  if (author?.discordId === user?.id) {
    await interaction.reply({
      content: "É o que o Faro sempre diz: amor próprio é o que importa 🥰",
      ephemeral: true,
    });
    return;
  }

  await interaction.reply({
    content: "CAVALO",
    ephemeral: true,
  });

  const message = await interaction.channel?.send({
    embeds: [cantadaEmbed(cantada, user.id)],
    components: [buttons],
  });

  await Cantada.create({
    body: cantada,
    author,
    target,
    discordId: message?.id,
  });

  return message;
};

export default {
  data,
  execute,
};
