import React, { FormEvent, useContext, useRef } from "react";
import TaskContext, { updateContext } from "../context/TaskContext";

import TaskModel from "../models/TaskModel";
import taskViewModel, { TaskViewModel } from "../viewmodels/TaskViewModel";
import "./TaskForm.css";

interface TaskFormProps {
    
}

const TaskForm: React.FC<TaskFormProps> = () => {

    const viewModel: TaskViewModel = taskViewModel();
    const { setTodoTasks, setDoingTasks, setDoneTasks } = useContext(TaskContext);


    const taskTitle = useRef<HTMLInputElement>(null);
    const taskDescription = useRef<HTMLInputElement>(null);

    const submit = (event: FormEvent) => {
        event.preventDefault();
        if (taskTitle.current === null || taskDescription.current === null) {
            return;
        }
        if (taskTitle.current.value === "") {
            alert("Please enter a title!");
            return;
        }
        const newTask = new TaskModel(
            "",
            "",
            taskTitle.current.value,
            taskDescription.current.value
        );
        viewModel.add(newTask);       
        taskTitle.current.value = "";
        taskDescription.current.value = "";
        updateContext(setTodoTasks,setDoingTasks,setDoneTasks);
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