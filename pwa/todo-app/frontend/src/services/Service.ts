import IResult from "../interfaces/IResult";

export default class Service {

    private headers = {
        "Content-Type": "application/json",
        "api_Key": `${process.env.REACT_APP_API_KEY}`,
    } as const;

    constructor(private api_url?: string) {      
        if (!api_url) console.log("API url is undefined!");
    }

    public async GET(endpoint: string): Promise<IResult> {
        return new Promise(async resolve => {
            const request = await fetch(`${this.api_url}${endpoint}`, {
                method: "GET",
                headers: this.headers,
            });
            resolve(request.json());
        });
    }

    public async POST(endpoint: string, body: any): Promise<IResult> {       
        return new Promise(async resolve => {
            const request = await fetch(`${this.api_url}${endpoint}`, {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify(body),
            });
            resolve(request.json());
        });
    }

    public async PATCH(endpoint: string, body: any): Promise<IResult> {
        return new Promise(async resolve => {
            const request = await fetch(`${this.api_url}${endpoint}`, {
                method: "PATCH",
                headers: this.headers,
                body: JSON.stringify(body),
            });
            resolve(request.json());
        });
    }

    public async DELETE(endpoint: string): Promise<IResult> {
        return new Promise(async resolve => {
            const request = await fetch(`${this.api_url}${endpoint}`, {
                method: "DELETE",
                headers: this.headers,
            });
            resolve(request.json());
        });
    }
}