import React, { FormEvent, useContext, useRef } from "react";
import TaskContext from "../context/TaskContext";
import UserContext from "../context/UserContext";

import Task from "../models/TaskModel";
import taskViewModel from "../viewmodels/TaskViewModel";
import "./TaskForm.css";

interface TaskFormProps {
    toggleShowForm(): any;
}

const TaskForm: React.FC<TaskFormProps> = ({toggleShowForm}: TaskFormProps) => {

    const { user } = useContext(UserContext);
    const { setTasks } = useContext(TaskContext);


    const taskTitle = useRef<HTMLInputElement>(null);
    const taskDescription = useRef<HTMLInputElement>(null);

    const submit = async (event: FormEvent) => {
        event.preventDefault();       
        if (!taskTitle.current || !taskDescription.current || !user) {
            return;
        }
        if (taskTitle.current.value === "") {
            alert("Please enter a title!");
            return;
        }
        const newTask = new Task(
            "",
            user._id,
            taskTitle.current.value,
            taskDescription.current.value
        );
        taskViewModel().createTask(newTask).then(results => {
            setTasks(results)
        });       
        taskTitle.current.value = "";
        taskDescription.current.value = "";
        toggleShowForm();
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