import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import logger from "./log/logger";
import Routes from "./routes/Routes"
import testDB from "./database/TestDB";
import MongoDB from "./database/MongoDB";
import * as Env from "./env/Env";

Env.init();
//dotenv.config();
//const PORT = process.env.PORT;
//const URL = process.env.URL;
const { PORT, URL } = Env.default();

const Logger = logger();
// Not a real db
const Mongo = new MongoDB()
Mongo.connect();
const DB = testDB();
const App = express();

Logger.log("Starting server...");

Logger.log("Attempting to connect to DB...")
if (!DB.connect()) {
    console.log("No DB connection!");
    process.exit(1);
}
Logger.log("DB connection established")

App
    .use(express.json())
    .use(urlencoded({ extended: true}))
    .use(cors());
    
Routes.forEach(route => {
    App.use('/v1/', route);
});

App.listen(PORT, () => {
    Logger.log(`Express listening at: ${URL}:${PORT}`)
    console.log(`Express listening at: ${URL}:${PORT}`);
});
