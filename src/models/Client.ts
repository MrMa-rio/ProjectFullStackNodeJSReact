export default class Client {
    id: number;
    name: string;
    cpf: string;

    private static nextId = 1;

    constructor(name: string, cpf: string) {
        this.id = Client.nextId++;
        this.name = name;
        this.cpf = cpf;
    }
}