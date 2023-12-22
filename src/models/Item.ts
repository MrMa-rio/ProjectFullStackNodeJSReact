interface ItemProps {
    name:string
    valor: number
}

export default class Item {
    name:string
    valor: number

    constructor(item:ItemProps) {
        this.name = item.name
        this.valor = item.valor
    }

    get object(): ItemProps {
        return {
            name: this.name,
            valor: this.valor
        }
    }
}