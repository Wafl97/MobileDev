import express, { urlencoded } from "express";
import cors from "cors";
import logger from "./log/logger";
import Routes from "./routes/Routes"
import testDB from "./database/TestDB";
import MongoDB from "./database/MongoDB";
import Env from "./env/Env";

//dotenv.config();
const PORT = Env.PORT;
const URL = Env.URL;

const Logger = logger();
// Not a real db
const Mongo = new MongoDB();
//const DB = testDB();
const App = express();

Logger.log("Starting server...");

Logger.log("Attempting to connect to DB...");
Mongo.connect();
Logger.log("DB connection established");

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
