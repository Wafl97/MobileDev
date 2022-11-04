import React, { useContext, useRef, useState } from "react";

import TaskViewModel from "../viewmodels/TaskViewModel";
import TaskModel, { TaskState } from "../models/TaskModel";
import TaskContext from "../context/TaskContext";

interface TaskCardProps {
    task: TaskModel
}
 
const TaskCard: React.FC<TaskCardProps> = ({task}: TaskCardProps) => {

    const viewModel: TaskViewModel = TaskViewModel.getIntance();

    const { setTodoTasks, setDoingTasks, setDoneTasks } = useContext(TaskContext);

    const [taskState, setTaskState] = useState(task.state);
    const [editModal, setEditModal] = useState(false);

    const taskTitle = useRef<HTMLInputElement>(null);
    const taskDescription = useRef<HTMLInputElement>(null);

    const toggleEditModal = () => {
        setEditModal(!editModal);
    }

    const nextState = () => {
        task.nextState();       
        setTaskState(task.state);
        updateContext();
    }

    const deleteTask = () => {
        viewModel.remove(task);
        updateContext();
    }

    const updateContext = () => {
        setTodoTasks(viewModel.getAllByState(TaskState.TODO));
        setDoingTasks(viewModel.getAllByState(TaskState.DOING));
        setDoneTasks(viewModel.getAllByState(TaskState.DONE));
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
                
                <div className="card-completed">
                    <div className="task-status" data-toggle={taskState} >
                        <h3>Status</h3>
                    </div>
                    <button onClick={nextState}>
                        {taskState === TaskState.TODO ? "Start Task" : taskState === TaskState.DOING ? "Complete Task" : "-"}
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default TaskCard;