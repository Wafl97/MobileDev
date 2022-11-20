import React, { FormEvent, useRef, useState } from "react";
import userViewModel from "../viewmodels/UserViewModel";
import "./LoginForm.css";

interface LoginFormProps {

}

const LoginForm: React.FC<LoginFormProps> = () => {

    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const [stayLoggedIn, setStayLoggedIn] = useState(false);

    const login = async (event: FormEvent) => {
        event.preventDefault()
        if (!username.current || !password.current) {
            return;
        }
        await userViewModel().login(username.current.value,password.current.value,stayLoggedIn);
    }

    const createNewUser = async (event: FormEvent) => {
        event.preventDefault()
        if (!username.current || !password.current) {
            return;
        }
        await userViewModel().createUser(username.current.value,password.current.value,stayLoggedIn);
    }



    return (
        <form className="login-form">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" ref={username} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" ref={password} />
            <label htmlFor="keep">
                Stay Logged In
                <input type="checkbox" name="keep" id="keep" checked={stayLoggedIn} onChange={() => setStayLoggedIn(!stayLoggedIn)} />
            </label>
            <input onClick={login} type="submit" value="Login" />
            <input onClick={createNewUser} type="submit" value="Create New User" />
        </form>
    );
}

export default LoginForm;