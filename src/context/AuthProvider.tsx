import { useCallback } from "react";
import api from "../service/Api";
import { AuthContext } from "./AuthContext";
import { IUserContext } from "./interface/UserContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const signIn = useCallback(async ({ email, password }: IUserContext) => {
    const response = await api.post("/signin", { email, password });

    // armazenar token
    const { token } = response.data;
    localStorage.setItem('@PermissionYT:token', token)

  }, []);

  return (
    <AuthContext.Provider value={{ token: "123", signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
