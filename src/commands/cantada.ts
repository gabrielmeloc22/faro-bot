import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, MessageEmbed } from "discord.js";

module.exports = {
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

    await interaction.channel?.send({
      embeds: [cantadaEmbed(cantada!, userId!)],
    });
  },
};

const cantadaEmbed = (cantada: string, userId: string) => {
  return new MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Vai dar namoro?")
    .setFields({ name: "A cantada", value: cantada })
    .setImage("https://c.tenor.com/gkak5SLi5mYAAAAM/torcendo-sorte.gif");
};
