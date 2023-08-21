import { useState, useEffect } from "react";
import { getRandomUser } from "../services/userServices";

export const useRandomUser = () => {
  const [user, setUser] = useState();
  const refreshUser = () => {
    const newUser = getRandomUser();
    setUser(newUser);
  };
  useEffect(refreshUser, []);
  return { user, refreshUser };
};
