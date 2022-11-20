declare class User {
    _id: string;
    username: string;
    password: string;
    constructor(_id: string, username: string, password: string);
}
declare const UserModel: import("@typegoose/typegoose").ReturnModelType<typeof User, import("@typegoose/typegoose/lib/types").BeAnObject>;
export { UserModel, User };
