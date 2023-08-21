import { users } from "../constants/users";

export const getRandomUser = () => {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
};
