import { createContext } from "react";

import TaskModel from "../models/TaskModel";

const TaskContext = createContext<{
    todoTasks?: TaskModel[], setTodoTasks: any, 
    doingTasks?: TaskModel[], setDoingTasks: any
    doneTasks?: TaskModel[], setDoneTasks: any}>({
    todoTasks: undefined, setTodoTasks: undefined,
    doingTasks: undefined, setDoingTasks: undefined,
    doneTasks: undefined, setDoneTasks: undefined,
});

export default TaskContext;
