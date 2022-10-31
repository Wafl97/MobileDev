import { createContext } from "react";

import TaskModel from "../models/TaskModel";

const TaskContext = createContext<{tasks?: TaskModel[], setTasks: any}>({
    tasks: undefined,
    setTasks: undefined,
});

export default TaskContext;
