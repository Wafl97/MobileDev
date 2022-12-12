export default interface IDB {
    connect(): boolean;
    disconnect(): boolean;
    query(query: string): any | any[];
}