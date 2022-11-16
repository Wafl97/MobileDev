import IDB from "../interfaces/DB.interface";
export declare class TestDB implements IDB {
    private static instance;
    private constructor();
    static getInstance(): TestDB;
    connect(): boolean;
    query(query: string): any | any[];
    disconnect(): boolean;
    private data;
}
declare const testDB: () => IDB;
export default testDB;
