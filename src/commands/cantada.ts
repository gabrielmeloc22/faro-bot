import { SlashCommandBuilder } from "@discordjs/builders";
import {
  CommandInteraction,
  MessageActionRow,
  MessageButton,
  MessageEmbed,
} from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("cantada")
    .setDescription("Uma escolha ousada")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("O(a) pretendente")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("cantada").setDescription("Sua cantada").setRequired(true)
    ),
  async execute(interaction: CommandInteraction) {
    const cantada = interaction.options.getString("cantada");
    const userId = interaction.options.getUser("user")?.id;

    await interaction.reply({
      content: "CAVALO",
      ephemeral: true,
    });
    if (!cantada || !userId) return;
    const message = await interaction.channel?.send({
      embeds: [cantadaEmbed(cantada, userId)],
      components: [buttons],
    });

    return message;
  },
};

const cantadaEmbed = (cantada: string, userId: string) => {
  return new MessageEmbed()
    .setColor("DARK_VIVID_PINK")
    .setTitle("Vai dar namoro?")
    .setFields(
      { name: "A cantada", value: cantada },
      { name: "O(a) pretendente", value: `<@${userId}>` }
    )
    .setImage("https://c.tenor.com/gkak5SLi5mYAAAAM/torcendo-sorte.gif");
};

const buttons = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("accept")
    .setLabel("Aceitar 💘")
    .setStyle("SECONDARY"),

  new MessageButton()
    .setCustomId("decline")
    .setLabel("Rejeitar 😭")
    .setStyle("SECONDARY")
);
