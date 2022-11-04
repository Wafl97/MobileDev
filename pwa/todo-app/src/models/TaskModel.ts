export enum TaskState {
    TODO = "TODO",
    DOING = "DOING",
    DONE = "DONE"
}

export default class Task {
    private static autoIdIncrement = 0;
    id: number;
    title: string;
    description: string;
    state: TaskState = TaskState.TODO;

    constructor(title: string, description: string) {
        this.id = Task.autoIdIncrement;
        this.title = title;
        this.description = description;
        Task.autoIdIncrement += 1;
    }

    public startTask(): void {
        this.state = TaskState.DOING;
    }

    public endTask(): void {
        this.state = TaskState.DONE;
    }

    public nextState(): void {
        switch (this.state) {
            case TaskState.TODO:
                this.state = TaskState.DOING;
                return;
            case TaskState.DOING:
                this.state = TaskState.DONE;
                return;
            default:
                return;
        }
    }

}
