---
geometry: margin=2cm
title: Assigment 3 - PWA
author: Marc Lindegård Weller Bertelsen - Student nr 496141
date: 11-11-2022
---

## Run the app

There is a docker-compose included with project, so just run:

`docker-compose up`

Ports used:

- Database: `27017`
- Backend API: `3366`
- Frontend: `3000`

## TODO-APP

## Context

Since many different components require access to both the user and the tasts, 2 contexts are implemented in the app:

[UserContext.ts](./frontend/src/context/UserContext.ts)

[TastContext.ts](./frontend/src/context/TaskContext.ts)

## MVVM

For the app MVVM is used to seperate the logic away from the ui

### Models

The app implements 2 models:

[UserModel.ts](./frontend/src/models/UserModel.ts)

```ts
import { v4 as uuidv4} from "uuid";

export default class User {

    constructor(public _id: string, 
                public username: string, 
                public password: string) {
        this._id = (_id === "") ? uuidv4() : _id;
    }
}
```

[TaskModel](./frontend/src/models/TaskModel.ts)

```ts
import { v4 as uuidv4} from "uuid";

export enum TaskState {
    TODO = "TODO",
    DOING = "DOING",
    DONE = "DONE"
}

export default class Task {

    constructor(public _id: string, 
                public user_id: string, 
                public title: string, 
                public description: string
                public state: TaskState = TaskState.TODO) {
        this._id = (!_id || _id.length === 0) ? uuidv4() : _id;
    }
}
```

### ViewModels

The 2 models each have their own ViewModel to handel the logic specific to the model. Both ViewModels are implemented as singletons:

[UserViewModel](./frontend/src/viewmodels/UserViewModel.ts)

```ts
import User from "../models/UserModel";
import Service from "../services/Service";

export class UserViewModel {
    private static instance: UserViewModel;
    private service: Service;

    private constructor() {
        this.service = new Service(process.env.REACT_APP_API_URL)
    }

    static getIntance(): UserViewModel {
        return this.instance === undefined ? this.instance = new UserViewModel() : this.instance;
    }

    retreiveUser(): User | undefined {
        ...
    }

    async login(username: string, password: string, stayLoggedIn: boolean): Promise<User | undefined> {
        ...
    }

    async createUser(username: string, password: string, stayLoggedIn: boolean): Promise<User | undefined> {
        ...
    }

    logout(): undefined {
        ...
    }

}

const userViewModel = () => {
    return UserViewModel.getIntance();
}

export default userViewModel;
```

[TaskViewModel](./frontend/src/viewmodels/TaskViewModel.ts)

The TaskViewModel uses a `Map<string, Task>`. where the key is the id of the task, to store the different tasks, so adding and removing a task can be done from the tasks id.

```ts
import Task from "../models/TaskModel";
import Service from "../services/Service";

export class TaskViewModel {
    private static instance: TaskViewModel;
    private service: Service;
    private taskMap: Map<string, Task>;

    private constructor() {
        this.service = new Service(process.env.REACT_APP_API_URL);
        this.taskMap = new Map();
    }

    static getIntance(): TaskViewModel {
        return this.instance ?? (this.instance = new TaskViewModel());
    }

    async createTask(task: Task): Promise<Task[]> {
        ...
    }

    async removeTask(task: Task): Promise<Task[]> {
        ...
    }

    async updateTask(task: Task): Promise<Task[]> {
        ...
    }

    async getAllTasks(user_id: string): Promise<Task[]> {
        ...
    }
}

const taskViewModel = () => {
    return TaskViewModel.getIntance();
}

export default taskViewModel;
```

### View

The only view in the app is [Dashboard.tsx](./frontend/src/views/Dashboard.tsx). Both the components [LoginForm.tsx](./frontend/src/components/LoginForm.tsx) and [Header.tsx](./frontend/src/components/Header.tsx), handles interactions with the `UserViewModel`. Interaction with the `TaskViewModel` is done with [TaskForm.tsx](./frontend/src/components/TaskForm.tsx) and [TaskCard.tsx](./frontend/src/components/TaskCard.tsx)

## Service

Since both the ViewModels interact with the backend, the [Service.ts](./frontend/src/services/Service.ts) wraps the `fetch api`:

```ts
import IResult from "../interfaces/IResult";

export default class Service {

    private headers = {
        "Content-Type": "application/json",
        "api_key": `${process.env.REACT_APP_API_KEY}`,
    } as const;

    constructor(private api_url?: string) {      
        if (!api_url) console.log("API url is undefined!");
    }

    public async GET(endpoint: string): Promise<IResult> {
        ...
    }

    public async POST(endpoint: string, body: any): Promise<IResult> {       
        ...
    }

    public async PATCH(endpoint: string, body: any): Promise<IResult> {
        ...
    }

    public async DELETE(endpoint: string): Promise<IResult> {
        ...
    }
}
```
