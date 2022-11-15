import React from "react";
import { Link } from "react-router-dom";

interface MainProps {
    
}
 
const Main: React.FC<MainProps> = () => {
    return (
        <div>
            <Link to={"dashboard"}>
                Dashboard
            </Link>
        </div>
    );
}
 
export default Main;