import React, { useContext, useRef, useState } from "react";

import taskViewModel from "../viewmodels/TaskViewModel";
import TaskModel, { TaskState } from "../models/TaskModel";
import "./TaskCard.css";
import TaskContext from "../context/TaskContext";

interface TaskCardProps {
    task: TaskModel
}
 
const TaskCard: React.FC<TaskCardProps> = ({task}: TaskCardProps) => {

    const { setTasks } = useContext(TaskContext);
    const [taskState, setTaskState] = useState(task);

    const [editModal, setEditModal] = useState(false);

    const taskTitle = useRef<HTMLInputElement>(null);
    const taskDescription = useRef<HTMLInputElement>(null);

    const toggleEditModal = () => {
        setEditModal(!editModal);
    }

    const nextState = () => {
        switch (task.state) {
            case TaskState.TODO:
                task.state = TaskState.DOING;
                break;
            case TaskState.DOING:
                task.state = TaskState.DONE;
                break;
            default:
                return;
        }
        setTaskState(task);
        taskViewModel().updateTask(task).then(results => {
            setTasks(results);
        });
    }

    const previousState = () => {
        switch (task.state) {
            case TaskState.DONE:
                task.state = TaskState.DOING;
                break;
            case TaskState.DOING:
                task.state = TaskState.TODO;
                break;
            default:
                return;
        }
        setTaskState(task);
        taskViewModel().updateTask(task).then(results => {
            setTasks(results);
        });;
    }

    const deleteTask = () => {
        taskViewModel().removeTask(task).then(results => {           
            setTasks(results);
        });
        
    }

    const saveEdit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (taskTitle.current === null || taskDescription.current === null) {
            return;
        }
        if (taskTitle.current.value === "") {
            alert("Please enter a title!");
            return;
        }
        task.title = taskTitle.current.value;
        task.description = taskDescription.current.value;
        taskViewModel().updateTask(task).then(results => {
            setTasks(results);
        });
        toggleEditModal();
    }

    return (
        <div className="task-card">
            <div className="card-content">
                <div className="card-control">
                    <button className="edit-task" onClick={toggleEditModal}>
                        Edit
                    </button>
                    <button className="delete-task" onClick={deleteTask}>
                        Delete
                    </button>
                </div>
                {editModal ? 
                <div className="card-info">
                    <form onSubmit={saveEdit} className="task-edit-form">
                        <input type="text" name="title" id="title" defaultValue={task.title} ref={taskTitle}/>
                        <input type="text" name="description" id="description" defaultValue={task.description} ref={taskDescription} />
                        <input type="submit" value="Save" />
                    </form>
                </div>
                : 
                <div className="card-info">
                    <h3>{task.title}</h3>
                    <h4>{task.description}</h4>
                </div>}
                <div className="card-control">
                    <button onClick={previousState} disabled={taskState.state === TaskState.TODO}>
                        {"<-"}
                    </button>
                    <button onClick={nextState} disabled={taskState.state === TaskState.DONE}>
                        {"->"}
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default TaskCard;