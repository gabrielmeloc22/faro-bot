import { User } from "../../model/user";
import { create, CreateArgs } from "./create";

export const getOrCreate = async (data: CreateArgs) => {
  try {
    const user = await User.findOne({ discordId: data.discordId });

    if (!user) {
      const result = await create(data);
      return result;
    }

    return user;
  } catch (error) {
    console.log(error);
  }
};
