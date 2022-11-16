import { createContext } from "react";
import User from "../models/UserModel";

const UserContext = createContext<{user?: User, setUser: any}>({user: undefined, setUser: undefined});

export default UserContext;