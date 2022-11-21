import { v4 as uuidv4} from "uuid";

export default class User {

    constructor(public _id: string, public username: string, public password: string) {
        this._id = (_id === "") ? uuidv4() : _id;
    }
}