import { OrderProps } from "src/interfaces"

export default class Order {
    idPedido: number
    descricao: string
    idCliente: number
    dataPedido: string

    constructor(order: OrderProps) {
        this.idPedido = order.idPedido
        this.descricao = order.descricao
        this.idCliente = order.idCliente
        this.dataPedido = order.dataPedido
    }

    get object(): OrderProps {
        return {
            idPedido: this.idPedido,
            descricao: this.descricao,
            idCliente: this.idCliente,
            dataPedido: this.dataPedido
        }
    }
}