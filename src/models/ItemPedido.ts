import { ItemPedidoProps } from "../interfaces";

export default class ItemPedido {
  id: number;
  fkPedido: number;
  fkItem: number;
  quantidade: number;
  preco_unitario: number;

  constructor(itemPedido: ItemPedidoProps) {
    this.id = itemPedido.id;
    this.fkPedido = itemPedido.fkPedido;
    this.fkItem = itemPedido.fkItem;
    this.quantidade = itemPedido.quantidade;
    this.preco_unitario = itemPedido.preco_unitario;
  }

  get object(): ItemPedidoProps {
    return {
      id: this.id,
      fkPedido: this.fkPedido,
      fkItem: this.fkItem,
      quantidade: this.quantidade,
      preco_unitario: this.preco_unitario,
    };
  }
}
