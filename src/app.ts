import 'dotenv/config';
import { Client, Intents, Collection } from 'discord.js';

import fs from 'node:fs';
import path from 'node:path';
import commands from './commands';

export const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

client.commands = new Collection();

Object.entries(commands).forEach(([name, command]) => {
  client.commands.set(name, command);
});

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith('.ts') || file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, async (...args) => await event.execute(...args));
  } else {
    client.on(event.name, async (...args) => await event.execute(...args));
  }
}

client.login(process.env.DISCORD_TOKEN);
