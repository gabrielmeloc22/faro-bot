import {
  ButtonInteraction,
  MessageActionRow,
  MessageButton,
  MessageButtonStyle,
  MessageEmbed,
} from "discord.js";
import { RenderCantadaType } from "../../@types/discord";
import { Cantada } from "../../model/cantada";
import { User } from "../../model/user";

const propsByType = {
  accept: {
    label: "Deu namoro💘",
    style: "SUCCESS",
    image: "https://c.tenor.com/hrOwstmBF-gAAAAd/vai-dar-namoro.gif",
  },
  decline: {
    label: "Hoje não, Faro 🥶",
    style: "PRIMARY",
    image:
      "https://thumbs.gfycat.com/JoyousEnlightenedAntipodesgreenparakeet-max-1mb.gif",
  },
};

export const renderCantada = async (
  interaction: ButtonInteraction,
  type: RenderCantadaType
) => {
  const props = propsByType[type];

  const cantadaInfo = await Cantada.findOne({
    discordId: interaction.message.id,
  }).lean();

  const user = await User.findOne({ _id: cantadaInfo?.target });

  const updatedEmbed = new MessageEmbed()
    .setColor("DARK_VIVID_PINK")
    .setTitle("Vai dar namoro?")
    .setFields(
      { name: "A cantada", value: cantadaInfo?.body as string },
      { name: "O(a) pretendente", value: `<@${user?.discordId}>` }
    )
    .setImage(props.image);

  await interaction.update({
    embeds: [updatedEmbed],
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
