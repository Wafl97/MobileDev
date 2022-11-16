import mongoose from "mongoose";
import DB from "../interfaces/DB.interface";
import Env from "../env/Env";

export default class MongoDB implements DB {

    connect(): boolean {
        //console.log(`mongodb://${this.DB_USER}:${this.DB_PASSWORD}@${this.DB_HOST}:${this.DB_PORT}/${this.DB_DATABASE}`);
        
        mongoose
            .connect(`mongodb://${Env.DB_HOST}:${Env.DB_PORT}/${Env.DB_DATABASE}`)
            .then(() => console.log(`Connected to MongoDB / ${Env.DB_DATABASE}`), (err) => console.log(err));
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