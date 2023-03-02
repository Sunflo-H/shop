import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../api/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    return readUserFromLocalStorage();
  });

  useEffect(() => {
    onUserStateChange((user) => {
      return setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, login: login, logout: logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function readUserFromLocalStorage() {
  const userInfo = localStorage.getItem("user");
  // console.log(JSON.parse(userInfo));
  return userInfo ? JSON.parse(userInfo) : null;
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
