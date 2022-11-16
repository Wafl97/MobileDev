import IDB from "../interfaces/DB.interface";

export class TestDB implements IDB {

    private static instance: TestDB = null;

    private constructor() {

    }

    public static getInstance() {
        if (this.instance === null) {
            this.instance = new TestDB();
        }
        return this.instance;
    }

    public connect(): boolean {
        console.log("Connecting to TestDB");
        return true;
    }

    public query(query: string): any | any[] {

        const [command, argument, fields] = query.split("->");

        switch(command) {
            case "getAll":
                return this.data;
            case "get":
                return this.data.filter(datum => datum.id === argument)[0]
            case "set":
                const datum = this.data.filter(datum => datum.id === argument)[0]
                const updates = fields.split(",");
                if (datum !== undefined){
                    updates.forEach(field => {
                        const [key, value] = field.split("=");
                        datum[key] = value;
                    });
                }
                return datum;
            case "add":
                const newDatum = {
                    id: argument
                }
                fields.split(",").forEach(field => {
                    const [key, value] = field.split("=");
                    newDatum[key] = value;
                })
                this.data = [...this.data, newDatum];
                return newDatum;
            case "del":
                let delDatum;
                let updatedData = [];
                this.data.forEach(datum => {
                    if (datum.id === argument) {
                        delDatum = datum;
                    }
                    else {
                        updatedData = [...updatedData, datum];
                    }
                });
                this.data = updatedData;
                return delDatum;
        }

    
    }
    public disconnect(): boolean {
        return true;
    }

    private data = [

    ]
}

const testDB = ():IDB => {
    return TestDB.getInstance();
}

export default testDB;