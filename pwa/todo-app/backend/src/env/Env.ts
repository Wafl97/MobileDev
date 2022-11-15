import dotenv from "dotenv";

const ProcessEnv = {
    PORT: "",
    URL: "",
    DB_USER: "",
    DB_PASSWORD: "",
    DB_HOST: "",
    DB_PORT: "",
    DB_DATABASE: ""
}

export const init = () => {
    dotenv.config();
    ProcessEnv.PORT = process.env.PORT;
    ProcessEnv.URL = process.env.URL;
    ProcessEnv.DB_USER = process.env.DB_USER;
    ProcessEnv.DB_PASSWORD = process.env.DB_PASSWORD;
    ProcessEnv.DB_HOST = process.env.DB_HOST;
    ProcessEnv.DB_PORT = process.env.DB_PORT;
    ProcessEnv.DB_DATABASE = process.env.DB_DATABASE;
}

const Env = () => {
    return ProcessEnv;
}

export default Env;