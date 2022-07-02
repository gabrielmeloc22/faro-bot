import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    discordId: String,
    bio: {
      type: String,
      default: "",
    },
    allowCantada: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
