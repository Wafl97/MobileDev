import React, { lazy, useContext } from "react";
import TaskContext from "../context/TaskContext";
import { TaskState } from "../models/TaskModel";
import "./TaskList.css";

interface TaskListProps {
    taskListName: TaskState
}

const TaskCard = lazy(() => import("../components/TaskCard"));


const TaskList: React.FC<TaskListProps> = ({ taskListName }: TaskListProps) => {

    const { tasks } = useContext(TaskContext);

    return (
        <div className="task-list">
            {tasks.map((task, index) => {
                if (task.state === taskListName) {                   
                    return <TaskCard key={task._id} task={task} />
                }
                return <div key={`${taskListName}:${index}`}></div>
            })}
        </div>
    );
}

export default TaskList;