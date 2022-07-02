import "dotenv/config";
import { SlashCommandBuilder } from "@discordjs/builders";

import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";

import path from "node:path";
import fs from "node:fs";

type Commands = {
  data: SlashCommandBuilder;
  execute: () => Promise<void>;
}[];

const commands: Commands = [];
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".ts") || file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(
  process.env.DISCORD_TOKEN as string
);

rest
  .put(Routes.applicationCommands(process.env.CLIENT_ID as string), {
    body: commands,
  })
  .then(() => console.log("Comandos registrados!"))
  .catch((err) => console.log(err));
