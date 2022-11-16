import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`) });

export default {
    NODE_ENV : process.env.NODE_ENV,
    PORT : process.env.PORT,
    URL : process.env.URL,
    DB_USER : process.env.DB_USER,
    DB_PASSWORD : process.env.DB_PASSWORD,
    DB_HOST : process.env.DB_HOST,
    DB_PORT : process.env.DB_PORT,
    DB_DATABASE : process.env.DB_DATABASE,
}