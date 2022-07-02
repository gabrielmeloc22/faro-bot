import { ClientWithCommands } from '../../@types/discord';
import commands from '../../commands';

export const importCommands = (client: ClientWithCommands) => {
  Object.entries(commands).forEach(([name, command]) => {
    client.commands.set(name, command);
  });
};
