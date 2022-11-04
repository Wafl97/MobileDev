import React, { useContext } from "react";

import TaskForm from "../components/TaskForm";
import TaskContext from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

interface DashboardProps {
    
}
 
const Dashboard: React.FC<DashboardProps> = () => {

    const { todoTasks, doingTasks, doneTasks } = useContext(TaskContext);
    
    return (
        <div>
            <header>

            </header>
            <main className="main-content">
                <TaskForm />
                <div className="tasks-wrapper">
                    <div className="tasks tasks-todo">
                        <h2>TODO</h2>
                        {todoTasks?.map((task, index) => {
                            return <TaskCard key={`task:${index}`} task={task} />
                        })}
                    </div>
                    <div className="tasks tasks-doing">
                        <h2>DOING</h2>
                        {doingTasks?.map((task, index) => {
                            return <TaskCard key={`task:${index}`} task={task} />
                        })}
                    </div>
                    <div className="tasks tasks-done">
                        <h2>DONE</h2>
                        {doneTasks?.map((task, index) => {
                            return <TaskCard key={`task:${index}`} task={task} />
                        })}
                    </div>
                </div>
            </main>
            <footer>
                
            </footer>
        </div>
    );
}
 
export default Dashboard;