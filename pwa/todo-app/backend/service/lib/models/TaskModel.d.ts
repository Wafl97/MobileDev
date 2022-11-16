declare class Task {
    _id: string;
    user_id: string;
    title: string;
    description: string;
    state: string;
    constructor(_id: string, user_id: string, title: string, description: string, state: string);
}
declare const TaskModel: import("@typegoose/typegoose").ReturnModelType<typeof Task, import("@typegoose/typegoose/lib/types").BeAnObject>;
export { TaskModel, Task };
