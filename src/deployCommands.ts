import "dotenv/config";

import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import commands from "./commands";

const rest = new REST({ version: "9" }).setToken(
  process.env.DISCORD_TOKEN as string
);

rest
  .put(Routes.applicationCommands(process.env.CLIENT_ID as string), {
    body: Object.values(commands),
  })
  .then(() => console.log("Comandos registrados!"))
  .catch((err) => console.log(err));
