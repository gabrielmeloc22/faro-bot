import { MessageActionRow, MessageButton } from "discord.js";

import { ButtonInteraction } from "discord.js/typings/index";

export default {
  name: "cantada",
  async execute(interaction: ButtonInteraction) {
    console.log('ta aq')
    const isTargetUser = !!interaction.message.embeds[0].fields?.find(
      (field) => field.value == `<@${interaction.user.id}>`
    );

    if (!isTargetUser) {
      await interaction.reply({
        content: "Você não é o(a) pretendente.",
        ephemeral: true,
      });
      return;
    }

    if (interaction.customId === "accept") {
      await cantadaAccepted(interaction);
    } else if (interaction.customId === "decline") {
      await cantadaDeclined(interaction);
    }
  },
};

const cantadaAccepted = async (interaction: ButtonInteraction) => {
  await interaction.update({
    components: [
      new MessageActionRow().addComponents(
        new MessageButton()
          .setCustomId("accept")
          .setLabel("Deu namoro💘")
          .setStyle("SUCCESS")
          .setDisabled()
      ),
    ],
  });
};

const cantadaDeclined = async (interaction: ButtonInteraction) => {
  await interaction.update({
    components: [
      new MessageActionRow().addComponents(
        new MessageButton()
          .setCustomId("accept")
          .setLabel("Hoje não, Faro 🥶")
          .setStyle("DANGER")
          .setDisabled()
      ),
    ],
  });
};
