import React, { lazy, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const LoginForm = lazy(() => import("../components/LoginForm"));

interface MainProps {
    
}
 
const Main: React.FC<MainProps> = () => {

    const { user } = useContext(UserContext);

    return (
        <div>
            {!user 
            ?
            <LoginForm />
            :
            <Link to={"dashboard"}>
                Dashboard
            </Link>}
            
        </div>
    );
}
 
export default Main;