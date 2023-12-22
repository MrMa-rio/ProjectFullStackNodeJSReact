interface OrderProps {
    idOrder: number
    description: string
    idClient: number
    dateOrder: string
}

export default class Order {
    idOrder: number
    description: string
    idClient: number
    dateOrder: string

    constructor(order: OrderProps) {
        this.idOrder = order.idOrder
        this.description = order.description
        this.idClient = order.idClient
        this.dateOrder = order.dateOrder
    }

    get object(): OrderProps {
        return {
            idOrder: this.idOrder,
            description: this.description,
            idClient: this.idClient,
            dateOrder: this.dateOrder
        }
    }
}