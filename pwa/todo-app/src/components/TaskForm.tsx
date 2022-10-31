import React, { useContext, useRef } from "react";

import TaskContext from "../context/TaskContext";
import TaskModel from "../models/TaskModel";
import TaskViewModel from "../viewmodels/TaskViewModel";

interface TaskFormProps {
    
}

const TaskForm: React.FC<TaskFormProps> = () => {

    const viewModel: TaskViewModel = TaskViewModel.getIntance();

    const { tasks, setTasks } = useContext(TaskContext);

    const taskTitle = useRef<HTMLInputElement>(null);
    const taskDescription = useRef<HTMLInputElement>(null);

    const submit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (taskTitle.current === null || taskDescription.current === null) {
            return;
        }
        if (taskTitle.current.value === "") {
            alert("Please enter a title!");
            return;
        }
        const newTask = new TaskModel(
            taskTitle.current.value,
            taskDescription.current.value
        );
        const tasksUpdated = (tasks !== undefined) ? [...tasks, newTask] : [newTask];
        setTasks(tasksUpdated);
        viewModel.add(newTask);
        taskTitle.current.value = "";
        taskDescription.current.value = "";
    }

    return (
        <form onSubmit={submit} className="task-create-form">
            <h3>Create a new task</h3>
            <input type="text" name="title" ref={taskTitle} placeholder="Title" />
            <input type="text" name="description" ref={taskDescription} placeholder="Description" />
            <input type="submit" value="Create New Task" />
        </form>
    );
}
 
export default TaskForm;