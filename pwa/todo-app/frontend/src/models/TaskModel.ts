import { v4 as uuidv4} from "uuid";

export enum TaskState {
    TODO = "TODO",
    DOING = "DOING",
    DONE = "DONE"
}

export default class Task {
    id: string;
    user_id: string;
    title: string;
    description: string;
    state: TaskState = TaskState.TODO;

    constructor(id: string, user_id: string, title: string, description: string) {
        this.id = (!id || id.length === 0) ? uuidv4() : id;
        this.user_id = user_id;
        this.title = title;
        this.description = description;
    }
}
