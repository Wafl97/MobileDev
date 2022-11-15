import React, { useContext, useRef, useState } from "react";

import taskViewModel, { TaskViewModel } from "../viewmodels/TaskViewModel";
import TaskModel, { TaskState } from "../models/TaskModel";
import "./TaskCard.css";
import TaskContext, { updateContext } from "../context/TaskContext";

interface TaskCardProps {
    task: TaskModel
}
 
const TaskCard: React.FC<TaskCardProps> = ({task}: TaskCardProps) => {

    const viewModel: TaskViewModel = taskViewModel();
    const { setTodoTasks, setDoingTasks, setDoneTasks } = useContext(TaskContext);

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
        viewModel.set(task);
        updateContext(setTodoTasks,setDoingTasks,setDoneTasks);
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
        viewModel.set(task);
        updateContext(setTodoTasks,setDoingTasks,setDoneTasks);
    }

    const deleteTask = () => {
        viewModel.remove(task);
        updateContext(setTodoTasks,setDoingTasks,setDoneTasks);
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
        viewModel.set(task);
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
                    <form onSubmit={saveEdit}>
                        <input type="text" name="title" id="title" placeholder={task.title} ref={taskTitle}/>
                        <input type="text" name="description" id="description" placeholder={task.description} ref={taskDescription} />
                        <input type="submit" value="Save" />
                    </form>
                </div>
                : 
                <div className="card-info">
                    <h3>{task.title}</h3>
                    <h4>{task.description}</h4>
                </div>}
                <div className="card-control">
                    <button onClick={previousState} disabled={task.state === TaskState.TODO}>
                        {"<-"}
                    </button>
                    <button onClick={nextState} disabled={task.state === TaskState.DONE}>
                        {"->"}
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default TaskCard;