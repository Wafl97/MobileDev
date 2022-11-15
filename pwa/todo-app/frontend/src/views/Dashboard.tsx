import React, { useContext, useEffect } from "react";

import TaskForm from "../components/TaskForm";
import TaskContext, { updateContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import "./Dashboard.css";

interface DashboardProps {
    
}
 
const Dashboard: React.FC<DashboardProps> = () => {

    const { todoTasks, setTodoTasks, doingTasks, setDoingTasks, doneTasks, setDoneTasks } = useContext(TaskContext);

    useEffect(() => {
        updateContext(setTodoTasks,setDoingTasks,setDoneTasks);
    }, [setDoingTasks, setDoneTasks, setTodoTasks]);
    
    return (
        <div className="dashboard">
            <header className="top-content">
                <TaskForm />
            </header>
            <main className="main-content">
                <div className="tasks">
                    <div className="tasks-todo">
                        <h3>Todo</h3>
                        <div className="task-list">
                            {todoTasks?.map(task => {
                                return <TaskCard key={task.id} task={task} />
                            })}
                        </div>
                    </div>
                    <div className="tasks-doing">
                        <h3>Doing</h3>
                        <div className="task-list">
                            {doingTasks?.map(task => {
                                return <TaskCard key={task.id} task={task}/>
                            })}
                        </div>
                    </div>
                    <div className="tasks-done">
                        <h3>Done</h3>
                        <div className="task-list">
                            {doneTasks?.map(task => {
                                return <TaskCard key={task.id} task={task}/>
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
 
export default Dashboard;