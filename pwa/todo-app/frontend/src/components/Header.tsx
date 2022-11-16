import React, { useContext } from "react";
import UserContext from "../context/UserContext";

interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = () => {

    const { user } = useContext(UserContext);

    return (
        <div className="header">
            {user && 
            <h1>`Welcome ${user.username}`</h1>}
        </div>
    );
}
 
export default Header;