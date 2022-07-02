import { ButtonInteraction, Permissions } from "discord.js";
import { Cantada } from "../../model/cantada";

type User = { id: string; name: string; discordId: string };
export const createPrivateChannel = async (
  cantadaId: string,
  interaction: ButtonInteraction
) => {
  const cantada = await Cantada.findById(cantadaId)
    .populate(["author", "target"])
    .lean();

  //@ts-ignore
  const { author, target }: { author: User; target: User } = cantada || {};
  if (!author || !target) return;

  await interaction.guild?.channels.create(
    `${author?.name} ♡ ${target?.name}`,
    {
      permissionOverwrites: [
        {
          type: "member",
          id: author.discordId,
          allow: [
            Permissions.FLAGS.SEND_MESSAGES,
            Permissions.FLAGS.VIEW_CHANNEL,
          ],
        },
        {
          type: "member",
          id: target.discordId,
          allow: [
            Permissions.FLAGS.SEND_MESSAGES,
            Permissions.FLAGS.VIEW_CHANNEL,
          ],
        },
        {
          type: "role",
          id: interaction.guild.roles.everyone.id,
          deny: [Permissions.FLAGS.VIEW_CHANNEL],
        },
      ],
    }
  );
};
