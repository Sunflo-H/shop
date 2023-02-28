import { createContext, useEffect, useState } from "react";
import { onUserStateChange } from "../api/firebase";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    onUserStateChange(setUser, setIsAdmin);
  }, []);

  return (
    <UserContext.Provider value={{ user, isAdmin }}>
      {children}
    </UserContext.Provider>
  );
};
