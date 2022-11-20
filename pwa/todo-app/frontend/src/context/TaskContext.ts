import { createContext } from "react";
import Task from "../models/TaskModel";

const TaskContext = createContext<{ tasks: Task[], setTasks: any}>
    ({tasks: [], setTasks: undefined});

export default TaskContext;