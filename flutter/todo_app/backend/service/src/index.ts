import Env from "./env/Env";
import express, { urlencoded } from "express";
import cors from "cors";
import Routes from "./routes/Routes"
import MongoDB from "./database/MongoDB";

const { URL, PORT, BASE_URL } = Env;

const Mongo = new MongoDB();
const App = express();

Mongo.connect();

App
    .use(express.json())
    .use(urlencoded({ extended: true}))
    .use(cors());
    
Routes.forEach(route => {
    App.use(BASE_URL, route);
});

App.listen(PORT, () => {
    console.log(`Express listening at: ${URL}:${PORT}`);
    console.log(`View the API doc @ ${URL}:${PORT}${BASE_URL}`)
});
