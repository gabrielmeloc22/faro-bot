import { client } from "../infra/app";
import { Interaction } from "discord.js/typings/index";
import interactions from "./interactions";

export default {
  name: "interactionCreate",
  async execute(interaction: Interaction) {
    if (interaction.isCommand()) {
      const command = client.commands.get(interaction.commandName);

      if (!command) return;

      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
      }
    } else if (interaction.isButton()) {
      Object.values(interactions).forEach(({ execute }) => {
        execute(interaction);
      });
    }
  },
};
