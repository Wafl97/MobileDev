import DB from "../interfaces/DB.interface";
export default class MongoDB implements DB {
    connect(): boolean;
    disconnect(): boolean;
    query(query: string): void;
}
