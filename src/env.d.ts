declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      CLIENT_ID: string;
      DISCORD_TOKEN: string;
    }
  }
}
