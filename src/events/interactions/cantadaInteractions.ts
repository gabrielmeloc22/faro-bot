import { ButtonInteraction } from "discord.js/typings/index";
import { RenderCantadaType } from "../../@types/discord";
import { renderCantada } from "./components";

export default {
  name: "cantada",
  async execute(interaction: ButtonInteraction) {
    const isTargetUser = !!interaction?.message?.embeds?.[0]?.fields?.find(
      (field) => field.value == `<@${interaction.user.id}>`
    );

    if (!isTargetUser) {
      await interaction.reply({
        content: "Você não é o(a) pretendente. CAVALO!",
        ephemeral: true,
      });
      return;
    }

    await renderCantada(interaction, interaction.customId as RenderCantadaType);
  },
};
