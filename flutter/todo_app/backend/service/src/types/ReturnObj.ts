export default class ReturnObj {
    public message: string;
    public value: {};

    constructor(message: string) {
        this.message = message;
        this.value = {};
    }

    setValue(value: {}): ReturnObj {
        this.value = value;
        return this;
    }
}