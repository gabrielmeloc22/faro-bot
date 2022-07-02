import "dotenv/config";
import mongoose from "mongoose";
import { client } from "./infra/app";

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => {
    console.log("🚀 Mongo Connected!");
    client.login(process.env.DISCORD_TOKEN);
  })
  .catch((err) => {
    console.error("an error occurred while connecting to mongoose: " + err);
  });
