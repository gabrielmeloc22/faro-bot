import { ClientWithCommands, DiscordEvent } from "../../@types/discord";
import events from "../../events";

export const importEvents = (client: ClientWithCommands) => {
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
};
