import Task from "../models/TaskModel";
import User from "../models/UserModel";

export default interface IResult {
    message: string;
    value: {
        task?: Task,
        tasks?: Task[],
        user?: User,
    }
}