import DB from "../interfaces/DB.interface";
export default class MongoDB implements DB {
    private DB_USER;
    private DB_PASSWORD;
    private DB_HOST;
    private DB_PORT;
    private DB_DATABASE;
    constructor();
    connect(): boolean;
    disconnect(): boolean;
    query(query: string): void;
}
