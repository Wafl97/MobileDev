import React, { lazy, useContext, useEffect, useState } from "react";
import "./Dashboard.css";

import taskViewModel from "../viewmodels/TaskViewModel";
import UserContext from "../context/UserContext";
import TaskContext from "../context/TaskContext";
import TaskList from "../components/TaskList";
import { TaskState } from "../models/TaskModel";

const TaskForm = lazy(() => import("../components/TaskForm"));
const LoginForm = lazy(() => import("../components/LoginForm"));

interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = () => {
    
    const { user } = useContext(UserContext);
    const { setTasks } = useContext(TaskContext);
    const [showTaskForm, setShowTaskForm] = useState(false);    
    
    const toggleShowTaskForm = () => {
        setShowTaskForm(!showTaskForm);
    }
    
    useEffect(() => {
        if (user) {
            taskViewModel().getAllTasks(user._id).then(results => {
                setTasks(results);
            });
        }        
        
    }, [user, setTasks]);

    return (
        <div className="dashboard">
            {!user
                ?
                <div className="main-content">
                    <LoginForm />
                </div>
                :
                <div className="main-content">
                    {showTaskForm &&
                        <div className="task-form">
                            <TaskForm toggleShowForm={toggleShowTaskForm} />
                        </div>}
                    <div className="tasks">
                        <div className="tasks-todo">
                            <div className="tasks-header">
                                <div className="tasks-title">
                                    <h3>Todo</h3>
                                </div>
                                <button className="add-task" onClick={toggleShowTaskForm}>+</button>
                            </div>
                            <TaskList taskListName={TaskState.TODO} />
                        </div>
                        <div className="tasks-doing">
                            <div className="tasks-header">
                                <div className="tasks-title">
                                    <h3>Doing</h3>
                                </div>
                            </div>
                            <TaskList taskListName={TaskState.DOING} />
                        </div>
                        <div className="tasks-done">
                            <div className="tasks-header">
                                <div className="tasks-title">
                                    <h3>Done</h3>
                                </div>
                            </div>
                            <TaskList taskListName={TaskState.DONE} />
                        </div>
                    </div>
                </div>}
        </div>
    );
}

export default Dashboard;