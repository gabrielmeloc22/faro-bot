import { ButtonInteraction } from "discord.js/typings/index";
import { RenderCantadaType } from "../../@types/discord";
import { Cantada } from "../../model/cantada";
import { renderCantada } from "./components";

const cantadaStatusByLabel: Record<string, string> = {
  "Aceitar 💘": "ACCEPTED",
  "Rejeitar 😭": "DECLINED",
};

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

    const status = cantadaStatusByLabel[interaction?.component?.label || ""];
    if (!status) return;

    await Cantada.updateOne(
      { discordId: interaction?.message?.id },
      { status }
    );

    await renderCantada(interaction, interaction.customId as RenderCantadaType);
  },
};
