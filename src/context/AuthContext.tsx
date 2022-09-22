import { createContext } from "react";
import { IAuthContext } from "./interface/UserContext";

export const AuthContext = createContext<IAuthContext>({}as IAuthContext)