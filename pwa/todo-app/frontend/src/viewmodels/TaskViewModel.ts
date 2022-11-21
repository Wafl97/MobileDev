import Task from "../models/TaskModel";
import Service from "../services/Service";

export class TaskViewModel {
    private static instance: TaskViewModel;
    private service: Service;
    private taskMap: Map<string, Task>;

    private constructor() {
        this.service = new Service(process.env.REACT_APP_API_URL);
        this.taskMap = new Map();
    }

    static getIntance(): TaskViewModel {
        return this.instance ?? (this.instance = new TaskViewModel());
    }

    async createTask(task: Task): Promise<Task[]> {
        await this.service.POST(`/task`, task);
        this.taskMap.set(task._id, task);
        return Array.from(this.taskMap.values());
    }

    async removeTask(task: Task): Promise<Task[]> {
        await this.service.DELETE(`/task/${task._id}`);        
        this.taskMap.delete(task._id);
        return Array.from(this.taskMap.values());
    }

    async updateTask(task: Task): Promise<Task[]> {
        await this.service.PATCH(`/task`, task);
        this.taskMap.set(task._id, task);
        return Array.from(this.taskMap.values());
    }

    async getAllTasks(user_id: string): Promise<Task[]> {
        const result = await this.service.GET(`/task/${user_id}`);
        result.value.tasks?.forEach(task => {
            this.taskMap.set(task._id,task);
        })
        return Array.from(this.taskMap.values());
    }
}

const taskViewModel = () => {
    return TaskViewModel.getIntance();
}

export default taskViewModel;
