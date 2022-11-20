import { v4 as uuidv4} from "uuid";

export enum TaskState {
    TODO = "TODO",
    DOING = "DOING",
    DONE = "DONE"
}

export default class Task {
    _id: string;
    user_id: string;
    title: string;
    description: string;
    state: TaskState = TaskState.TODO;

    constructor(_id: string, user_id: string, title: string, description: string) {
        this._id = (!_id || _id.length === 0) ? uuidv4() : _id;
        this.user_id = user_id;
        this.title = title;
        this.description = description;
    }

    public static from(task: Task) {
        return new Task(task._id, task.user_id, task.title, task.description).setState(task.state);
    }

    public setState(state: TaskState): Task {
        this.state = state;
        return this;
    }
}
