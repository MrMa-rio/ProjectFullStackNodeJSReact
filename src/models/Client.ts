interface ClientProps {
    name:string
    cpf: string
    telefone:string
}

export default class Client {
    name: string
    cpf: string
    telefone: string

    constructor(client:ClientProps) {
        this.name = client.name
        this.cpf = client.cpf
        this.telefone = client.telefone
    }

    get object(): ClientProps {
        return {
            name: this.name,
            cpf: this.cpf,
            telefone: this.telefone
        }
    }
}