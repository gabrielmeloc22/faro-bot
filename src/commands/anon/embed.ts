import { MessageEmbed } from "discord.js";
import { getRandomGIF } from "../../utils/getRandomGIF";

export const cantadaEmbed = (cantada: string, userId: string) => {
  const randomGif = getRandomGIF();

  return new MessageEmbed()
    .setColor("DARK_VIVID_PINK")
    .setTitle("Vai dar namoro?")
    .setFields(
      { name: "A cantada", value: cantada },
      { name: "O(a) pretendente", value: `<@${userId}>` }
    )
    .setImage(randomGif);
};
