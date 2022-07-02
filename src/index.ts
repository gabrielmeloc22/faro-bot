import 'dotenv/config';

import { client } from './infra/app';
client.login(process.env.DISCORD_TOKEN);
