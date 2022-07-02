import { User } from "../../model/user";

export type CreateArgs = {
  name: string;
  discordId: string;
  bio?: string;
};

export const create = async (data: CreateArgs) => {
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    console.error(error);
  }
};
