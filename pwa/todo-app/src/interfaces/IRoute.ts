import React from "react";

export default interface IRoute {
    name: string;
    path: string;
    view: React.FC<any>;
    props?: any;
}