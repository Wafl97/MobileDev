export default class Task {
    private static autoIdIncrement = 0;
    id: number;
    title: string;
    description: string;
    completed: boolean = false;

    constructor(title: string, description: string) {
        this.id = Task.autoIdIncrement;
        this.title = title;
        this.description = description;
        Task.autoIdIncrement += 1;
    }
}