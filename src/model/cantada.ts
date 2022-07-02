import mongoose from "mongoose";

const cantadaSchema = new mongoose.Schema(
  {
    body: String,
    author: { type: "ObjectId", ref: "User" },
    target: { type: "ObjectId", ref: "User" },
    status: { type: String, default: "PENDING" },
  },
  { timestamps: true }
);

export const Cantada = mongoose.model("Cantada", cantadaSchema);
