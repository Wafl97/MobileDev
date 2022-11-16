import { v4 as uuidv4} from "uuid";

export enum TaskState {
    TODO = "TODO",
    DOING = "DOING",
    DONE = "DONE"
}

export default class Task {
    _id: string;
    title: string;
    description: string;
    state: TaskState = TaskState.TODO;

    constructor(title: string, description: string) {
        this._id = uuidv4();
        this.title = title;
        this.description = description;
    }
}
