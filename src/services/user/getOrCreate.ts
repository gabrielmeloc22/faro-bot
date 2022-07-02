import { User } from "../../model/user";
import { CreateArgs } from "./create";

export const getOrCreate = async (data: CreateArgs) => {
  try {
    const user = await User.findOne({ discordId: data.discordId });

    if (!user) {
      const result = await User.create(data);
      return result;
    }

    return user;
  } catch (error) {
    console.log(error);
  }
};
