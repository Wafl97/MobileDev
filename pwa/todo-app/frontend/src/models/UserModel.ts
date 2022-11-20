import { v4 as uuidv4} from "uuid";

export default class User {

    _id: string;
    username: string;
    password: string;

    constructor(_id: string, username: string, password: string) {
        this._id = (_id === "") ? uuidv4() : _id;
        this.username = username;
        this.password = password;
    }
}