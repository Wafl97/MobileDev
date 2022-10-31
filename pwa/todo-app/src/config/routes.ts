import { lazy } from "react";
import IRoute from "../interfaces/IRoute"

//Views
const Dashboard = lazy(() => import("../views/Dashboard"));


const routes: IRoute[] = [
    {
        name: "dashboard",
        path: "/",
        view: Dashboard,
    },
];

export default routes;