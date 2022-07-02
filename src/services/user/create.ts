import { User } from "../../model/user";

type CreateArgs = {
  name: string;
  discordId: string;
  bio?: string;
};

export const create = async (data: CreateArgs) => {
  const user = await User.create(data);
  return user;
};
