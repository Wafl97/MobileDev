import User from "../models/UserModel";
import Service from "../services/Service";

export class UserViewModel {
    private static instance: UserViewModel;
    private _setUser: any;
    private service: Service;

    private constructor() {
        this._setUser = undefined;
        this.service = new Service(process.env.REACT_APP_API_URL)
    }

    public config(setUser: any): void {
        this._setUser = setUser
    }

    public static getIntance(): UserViewModel {
        return this.instance === undefined ? this.instance = new UserViewModel() : this.instance;
    }

    public retreiveUser(): void {
        const localUser = localStorage.getItem("user");
        if (localUser) {
            const userJson = JSON.parse(localUser);
            this._setUser(userJson)
        }
    }

    public async login(username: string, password: string, stayLoggedIn: boolean): Promise<User | undefined> {
        const result = await this.service.POST(`/login`,{username: username, password: password});
        const message = result.message;
        if (!result.value || !result.value.user) {
            alert(message);
            return undefined;
        }
        if (stayLoggedIn) localStorage.setItem("user", JSON.stringify(result.value.user));
        this._setUser(result.value.user);
        return result.value.user;
    }

    public async createUser(username: string, password: string, stayLoggedIn: boolean) {
        const result = await this.service.POST(`/user`, new User("", username, password));
        const message = result.message;
        if (!result.value || !result.value.user) {
            alert(message);
            return undefined;
        }
        if (stayLoggedIn) localStorage.setItem("user", JSON.stringify(result.value.user));
        this._setUser(result.value.user);
    }

    public async logout() {
        localStorage.removeItem("user");
        this._setUser(undefined);
    }

}

const userViewModel = () => {
    return UserViewModel.getIntance();
}

export default userViewModel;