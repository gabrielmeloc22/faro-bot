import 'dotenv/config';
import { Client, Intents, Collection } from 'discord.js';

import commands from './commands';
import events from './events';
import { ClientWithCommands, DiscordEvent } from './@types/discord';

export const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
}) as unknown as ClientWithCommands;

client.commands = new Collection();

Object.entries(commands).forEach(([name, command]) => {
  client.commands.set(name, command);
});

Object.values(events).forEach((event: DiscordEvent) => {
  if (event.once) {
    client.once(event.name, async (...args) => {
      //@ts-ignore
      await event.execute(...args);
    });
    return;
  }

  client.on(event.name, async (...args) => {
    //@ts-ignore
    await event.execute(...args);
  });
});

client.login(process.env.DISCORD_TOKEN);
