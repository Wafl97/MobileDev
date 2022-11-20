import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: "users", timestamps: true } })
class User {

    @prop({ required: true })
    public _id: string;

    @prop({ unique: true})
    public username: string;

    @prop()
    public password: string;

    constructor(_id: string, username: string, password: string) {
        this._id = _id;
        this.username = username;
        this.password = password;
    }
}

const UserModel = getModelForClass(User);

export { UserModel, User };