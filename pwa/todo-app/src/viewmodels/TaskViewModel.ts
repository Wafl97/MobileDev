import TaskModel from "../models/TaskModel";

export default class TaskViewModel {
    private static instance: TaskViewModel;
    private taskList: TaskModel[];

    private constructor() {
        this.taskList = [];
     }

    public static getIntance(): TaskViewModel {
        return this.instance === undefined ? this.instance = new TaskViewModel() : this.instance;
    }

    public add(task: TaskModel): void {
        this.taskList.push(task);      
    }

    public remove(task: TaskModel): void {      
        this.taskList = this.taskList.filter(_task => _task.id !== task.id);
    }

    public get(taskId: number): TaskModel | undefined {
        return this.taskList.filter(task => task.id === taskId)[0];
    }

    public getAll(): TaskModel[] {
        return this.taskList;
    }

}