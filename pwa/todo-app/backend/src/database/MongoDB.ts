import mongoose from "mongoose";
import DB from "../interfaces/DB.interface";
import Env from "../env/Env";

export default class MongoDB implements DB {

    private DB_USER: string;
    private DB_PASSWORD: string;
    private DB_HOST: string;
    private DB_PORT: string;
    private DB_DATABASE: string;

    constructor() {
        const env = Env();
        this.DB_USER = env.DB_USER;
        this.DB_PASSWORD = env.DB_PASSWORD;
        this.DB_HOST = env.DB_HOST;
        this.DB_PORT =env.DB_PORT;
        this.DB_DATABASE = env.DB_DATABASE;
    }

    connect(): boolean {
        //console.log(`mongodb://${this.DB_USER}:${this.DB_PASSWORD}@${this.DB_HOST}:${this.DB_PORT}/${this.DB_DATABASE}`);
        
        mongoose
            .connect(`mongodb://${this.DB_HOST}:${this.DB_PORT}/${this.DB_DATABASE}`)
            .then(() => console.log(`Connected to MongoDB / ${this.DB_DATABASE}`), (err) => console.log(err));
        return true;
    }
    disconnect(): boolean {
        mongoose.disconnect();
        return true;
    }
    query(query: string) {
        throw new Error("Method not implemented.");
    }
}