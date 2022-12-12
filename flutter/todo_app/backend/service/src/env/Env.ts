import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, process.env.NODE_ENV ? `../../.env.${process.env.NODE_ENV}` : "../../.env.develop") });

export default {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    URL: process.env.URL,
    BASE_URL: process.env.BASE_URL,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_DATABASE: process.env.DB_DATABASE,
    KEY: process.env.KEY,
}