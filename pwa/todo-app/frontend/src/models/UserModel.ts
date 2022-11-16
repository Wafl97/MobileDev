import { v4 as uuidv4} from "uuid";

export default class User {

    id: string;
    username: string;
    password: string;

    constructor(id: string, username: string, password: string) {
        this.id = (id === "") ? uuidv4() : id;
        this.username = username;
        this.password = password;
    }
}