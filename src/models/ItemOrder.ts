import { ItemOrderProps } from "../interfaces";

export default class ItemOrder {
  id: number;
  fkPedido: number;
  fkItem: number;
  quantidade: number;
  preco_unitario: number;

  constructor(itemOrder: ItemOrderProps) {
    this.id = itemOrder.id;
    this.fkPedido = itemOrder.fkPedido;
    this.fkItem = itemOrder.fkItem;
    this.quantidade = itemOrder.quantidade;
    this.preco_unitario = itemOrder.preco_unitario;
  }

  get object(): ItemOrderProps {
    return {
      id: this.id,
      fkPedido: this.fkPedido,
      fkItem: this.fkItem,
      quantidade: this.quantidade,
      preco_unitario: this.preco_unitario,
    };
  }
}
