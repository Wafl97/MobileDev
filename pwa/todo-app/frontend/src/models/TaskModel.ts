import { v4 as uuidv4} from "uuid";

export enum TaskState {
    TODO = "TODO",
    DOING = "DOING",
    DONE = "DONE"
}

export default class Task {

    constructor(public _id: string, public user_id: string, public title: string, public description: string, public state: TaskState = TaskState.TODO) {
        this._id = (!_id || _id.length === 0) ? uuidv4() : _id;
    }
}
