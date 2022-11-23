import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TaskContext from "../context/TaskContext";
import UserContext from "../context/UserContext";
import taskViewModel from "../viewmodels/TaskViewModel";
import userViewModel from "../viewmodels/UserViewModel";
import "./Header.css";

interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = () => {

    const { user, setUser } = useContext(UserContext);
    const { setTasks } = useContext(TaskContext);

    const logout = (event: React.MouseEvent) => {
        setUser(userViewModel().logout());
        setTasks(taskViewModel().reset());
    }

    return (
        <div className="header">
            {user ?
            <div className="header-info">
                <h1>Welcome {user.username}</h1>
                <Link className="logout" to={"/"} onClick={logout}>Log out</Link>
            </div>
            :
            <div className="header-info">
                <h1>TODO-APP</h1>
            </div>
            }
        </div>
    );
}
 
export default Header;