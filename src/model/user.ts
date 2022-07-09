import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    discordId: { type: String, unique: true, required: true },
    bio: { type: String, default: "" },
    allowCantada: { type: Boolean, default: true },
    commandBanned: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
