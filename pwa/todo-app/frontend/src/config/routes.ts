import { lazy } from "react";
import IRoute from "../interfaces/IRoute"

//Views
const Main = lazy(() => import("../views/Main"));
const Dashboard = lazy(() => import("../views/Dashboard"));

const routes: IRoute[] = [
    {
        name: "main",
        path: "/",
        view: Main,
    },
    {
        name: "dashboard",
        path: "/dashboard",
        view: Dashboard,
    },
];

export default routes;