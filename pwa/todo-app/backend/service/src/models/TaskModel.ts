import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: "tasks", timestamps: true } })
class Task {

    @prop({ required: true })
    public _id: string;

    @prop()
    public user_id: string;

    @prop()
    public title: string;

    @prop()
    public description: string;

    @prop()
    public state: string;

    constructor(_id: string, user_id: string, title: string, description: string, state: string) {
        this._id = _id;
        this.user_id = user_id;
        this.title = title;
        this.description = description;
        this.state = state;
    }
}

const TaskModel = getModelForClass(Task);

export { TaskModel, Task };