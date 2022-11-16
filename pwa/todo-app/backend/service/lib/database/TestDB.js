"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDB = void 0;
class TestDB {
    constructor() {
        this.data = [];
    }
    static getInstance() {
        if (this.instance === null) {
            this.instance = new TestDB();
        }
        return this.instance;
    }
    connect() {
        console.log("Connecting to TestDB");
        return true;
    }
    query(query) {
        const [command, argument, fields] = query.split("->");
        switch (command) {
            case "getAll":
                return this.data;
            case "get":
                return this.data.filter(datum => datum.id === argument)[0];
            case "set":
                const datum = this.data.filter(datum => datum.id === argument)[0];
                const updates = fields.split(",");
                if (datum !== undefined) {
                    updates.forEach(field => {
                        const [key, value] = field.split("=");
                        datum[key] = value;
                    });
                }
                return datum;
            case "add":
                const newDatum = {
                    id: argument
                };
                fields.split(",").forEach(field => {
                    const [key, value] = field.split("=");
                    newDatum[key] = value;
                });
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
    disconnect() {
        return true;
    }
}
exports.TestDB = TestDB;
TestDB.instance = null;
const testDB = () => {
    return TestDB.getInstance();
};
exports.default = testDB;
//# sourceMappingURL=TestDB.js.map