import { client } from "../app";
import { Interaction } from "discord.js/typings/index";

import path from "node:path";
import fs from "node:fs";

const interactionsPath = path.join(__dirname, "interactions");
const interactionFiles = fs
  .readdirSync(interactionsPath)
  .filter((file) => file.endsWith(".ts") || file.endsWith(".js"));

module.exports = {
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
      for (const file of interactionFiles) {
        const filePath = path.join(interactionsPath, file);
        const i = require(filePath);

        i.execute(interaction);
      }
    }
  },
};
