import 'dotenv/config';
import { Client, Intents, Collection } from 'discord.js';
import { ClientWithCommands } from '../@types/discord';
import { importCommands } from './import/commands';
import { importEvents } from './import/events';

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
}) as unknown as ClientWithCommands;

client.commands = new Collection();

importCommands(client);
importEvents(client);

export { client };
