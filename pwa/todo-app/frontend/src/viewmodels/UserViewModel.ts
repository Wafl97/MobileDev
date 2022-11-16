export class UserViewModel {
    private static instance: UserViewModel;
    private _API_URL: string;

    private constructor() {
        this._API_URL = "http://127.0.0.1:8080";
    }

    public static getIntance(): UserViewModel {
        return this.instance === undefined ? this.instance = new UserViewModel() : this.instance;
    }

    async login() {

    }

    async logout() {
        
    }

}

const userViewModel = () => {
    return UserViewModel.getIntance();
}

export default userViewModel;