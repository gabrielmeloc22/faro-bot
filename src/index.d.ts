declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      CLIENT_ID: string;
      DISCORD_TOKEN: string;
    }
  }

  declare module "discord.js" {
    interface Client {
      commands: Collection<unknown, any>;
    }
  }
}
