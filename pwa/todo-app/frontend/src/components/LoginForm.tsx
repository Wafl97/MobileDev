import React, { FormEvent, useContext, useRef } from "react";
import UserContext from "../context/UserContext";
import User from "../models/UserModel";

interface LoginFormProps {

}

const LoginForm: React.FC<LoginFormProps> = () => {

    const { user, setUser } = useContext(UserContext);

    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const login = (event: FormEvent) => {
        event.preventDefault()
        if (!username.current || !password.current) {
            return;
        }
        const id = "asdasd";
        const localUser = new User(id,username.current.value,password.current.value);
        localStorage.setItem("user",JSON.stringify(localUser));
        setUser(localUser);
        console.log(user);
        
    }

    return (
        <form onSubmit={login}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" ref={username} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" ref={password} />
            <input type="submit" value="Login" />
        </form>
    );
}

export default LoginForm;