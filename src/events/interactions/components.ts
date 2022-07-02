import {
  ButtonInteraction,
  MessageActionRow,
  MessageButton,
  MessageButtonStyle,
} from "discord.js";
import { RenderCantadaType } from "../../@types/discord";

const propsByType = {
  accept: {
    label: "Deu namoro💘",
    style: "SUCCESS",
  },
  decline: {
    label: "Hoje não, Faro 🥶",
    style: "DANGER",
  },
};

export const renderCantada = async (
  interaction: ButtonInteraction,
  type: RenderCantadaType
) => {
  const props = propsByType[type];

  await interaction.update({
    components: [
      new MessageActionRow().addComponents(
        new MessageButton()
          .setCustomId("accept")
          .setLabel(props.label)
          .setStyle(props.style as MessageButtonStyle)
          .setDisabled()
      ),
    ],
  });
};
