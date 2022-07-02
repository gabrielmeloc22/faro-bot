import { MessageEmbed } from "discord.js";

export const cantadaEmbed = (cantada: string, userId: string) => {
  return new MessageEmbed()
    .setColor("DARK_VIVID_PINK")
    .setTitle("Vai dar namoro?")
    .setFields(
      { name: "A cantada", value: cantada },
      { name: "O(a) pretendente", value: `<@${userId}>` }
    )
    .setImage("https://c.tenor.com/gkak5SLi5mYAAAAM/torcendo-sorte.gif");
};
