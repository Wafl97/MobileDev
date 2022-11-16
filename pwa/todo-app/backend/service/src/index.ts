import Env from "./env/Env";
import express, { urlencoded } from "express";
import cors from "cors";
import logger from "./log/logger";
import Routes from "./routes/Routes"
import testDB from "./database/TestDB";
import MongoDB from "./database/MongoDB";

//dotenv.config();
const { URL, PORT, BASE_URL } = Env;

const Logger = logger();
// Not a real db
const Mongo = new MongoDB();
//const DB = testDB();
const App = express();

Logger.log("Starting server...");

Logger.log("Attempting to connect to DB...");
Mongo.connect();

App
    .use(express.json())
    .use(urlencoded({ extended: true}))
    .use(cors());
    
Routes.forEach(route => {
    App.use(BASE_URL, route);
});

App.listen(PORT, () => {
    Logger.log(`Express listening at: ${URL}:${PORT}`)
    console.log(`Express listening at: ${URL}:${PORT}`);
    console.log(`View the API doc @ ${URL}:${PORT}${BASE_URL}`)
});
