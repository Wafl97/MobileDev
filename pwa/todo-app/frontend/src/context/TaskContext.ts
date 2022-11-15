import { createContext } from "react";

import TaskModel, { TaskState } from "../models/TaskModel";
import { TaskViewModel } from "../viewmodels/TaskViewModel";

const TaskContext = createContext<{
    todoTasks?: TaskModel[], setTodoTasks: any, 
    doingTasks?: TaskModel[], setDoingTasks: any
    doneTasks?: TaskModel[], setDoneTasks: any}>({
    todoTasks: undefined, setTodoTasks: undefined,
    doingTasks: undefined, setDoingTasks: undefined,
    doneTasks: undefined, setDoneTasks: undefined,
});

export default TaskContext;

// TODO: yup :)
export const updateContext = (setTodoTasks: (arg0: TaskModel[]) => void, setDoingTasks: (arg0: TaskModel[]) => void, setDoneTasks: (arg0: TaskModel[]) => void) => {
    TaskViewModel.getIntance().getAll().then(tasks => {
        const todos: TaskModel[] = [];
        const doings: TaskModel[] = [];
        const dones: TaskModel[] = [];
        tasks.forEach(task => {
            switch(task.state) {
                case TaskState.TODO:
                    todos.push(task);
                    break;
                case TaskState.DOING:
                    doings.push(task);
                    break;
                case TaskState.DONE:
                    dones.push(task);
                    break;
            }
        });
        setTodoTasks(todos);
        setDoingTasks(doings);
        setDoneTasks(dones);
    });
}
