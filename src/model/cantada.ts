import mongoose from "mongoose";

const cantadaSchema = new mongoose.Schema(
  {
    body: String,
    author: { type: "ObjectId", ref: "User", required: true },
    target: { type: "ObjectId", ref: "User", required: true },
    status: { type: String, default: "PENDING" },
    discordId: { type: String, unique: true, required: true },
  },
  { timestamps: true }
);

export const Cantada = mongoose.model("Cantada", cantadaSchema);
