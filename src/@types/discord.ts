import { Client, Collection, Interaction } from 'discord.js';

export interface DiscordEvent {
  name: string;
  execute: (interaction: Interaction) => void | Promise<void>;
  once?: boolean;
}

export interface ClientWithCommands extends Client {
  commands: Collection<unknown, any>;
}