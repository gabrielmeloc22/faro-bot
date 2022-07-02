import { MessageActionRow, MessageButton } from "discord.js";

export const buttons = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("accept")
    .setLabel("Aceitar 💘")
    .setStyle("SECONDARY"),

  new MessageButton()
    .setCustomId("decline")
    .setLabel("Rejeitar 😭")
    .setStyle("SECONDARY")
);
