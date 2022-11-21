import React, { FormEvent, useContext, useRef, useState } from "react";
import UserContext from "../context/UserContext";
import userViewModel from "../viewmodels/UserViewModel";
import "./LoginForm.css";

interface LoginFormProps {

}

const LoginForm: React.FC<LoginFormProps> = () => {

    const { setUser } = useContext(UserContext);
    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const [stayLoggedIn, setStayLoggedIn] = useState(false);

    const login = (event: FormEvent) => {
        event.preventDefault();
        userViewModel().login(username.current!.value,password.current!.value,stayLoggedIn).then(result => {
            setUser(result);
        });
    }

    const createNewUser = (event: FormEvent) => {
        event.preventDefault();
        userViewModel().createUser(username.current!.value,password.current!.value,stayLoggedIn).then(result => {
            setUser(result);
        });
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