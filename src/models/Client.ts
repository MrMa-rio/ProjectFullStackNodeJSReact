import { ClientProps } from "src/interfaces"

export default class Client {
    idCliente: number
    nome: string
    cpf: string
    telefone: string

    constructor(client:ClientProps) {
        this.idCliente = client.idCliente
        this.nome = client.nome
        this.cpf = client.cpf
        this.telefone = client.telefone
    }

    get object(): ClientProps {
        return {
            idCliente: this.idCliente,
            nome: this.nome,
            cpf: this.cpf,
            telefone: this.telefone
        }
    }
}