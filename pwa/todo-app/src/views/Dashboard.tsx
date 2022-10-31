import React, { useContext } from "react";

import TaskForm from "../components/TaskForm";
import TaskContext from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

interface DashboardProps {
    
}
 
const Dashboard: React.FC<DashboardProps> = () => {

    const { tasks } = useContext(TaskContext);
    
    return (
        <div>
            <header>

            </header>
            <main className="main-content">
                <TaskForm />
                <div className="tasks">
                    {tasks?.map((task, index) => {
                        return <TaskCard key={`task:${index}`} task={task} />
                    })}
                </div>
            </main>
            <footer>
                
            </footer>
        </div>
    );
}
 
export default Dashboard;