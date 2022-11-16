import TaskModel from "../models/TaskModel";

export class TaskViewModel {
    private static instance: TaskViewModel;
    private _API_URL: string;

    private constructor() {
        this._API_URL = "http://127.0.0.1:3366/v1";
    }

    public static getIntance(): TaskViewModel {
        return this.instance === undefined ? this.instance = new TaskViewModel() : this.instance;
    }

    public async add(task: TaskModel): Promise<TaskModel> {
        return new Promise<TaskModel>(async resolve => {
            const request = await fetch(`${this._API_URL}/task`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task),
            });
            resolve(request.json());
        });    
    }

    public remove(task: TaskModel): Promise<TaskModel> {      
        return new Promise<TaskModel>(async resolve => {
            const request = await fetch(`${this._API_URL}/task/${task._id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            resolve(request.json());
        });
        }

    public async get(taskId: number): Promise<TaskModel> {
        return new Promise<TaskModel>(async resolve => {
            const request = await fetch(`${this._API_URL}/task/${taskId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            resolve(request.json());
        });
    }

    public async getAll(): Promise<TaskModel[]> {
        return new Promise<TaskModel[]>(async resolve => {
            const request = await fetch(`${this._API_URL}/task`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            resolve(request.json());
        });
    }

    public async set(task: TaskModel): Promise<TaskModel> {
        return new Promise<TaskModel>(async resolve => {
            const request = await fetch(`${this._API_URL}/task`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task),
            });
            resolve(request.json());
        });
    }
}

const taskViewModel = () => {
    return TaskViewModel.getIntance();
}

export default taskViewModel;
