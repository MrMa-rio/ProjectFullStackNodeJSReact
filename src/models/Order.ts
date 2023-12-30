import { OrderProps } from "../interfaces";

export default class Order {
  idPedido: number;
  descricao: string;
  fkCliente: number;
  dataPedido: string;

  constructor(order: OrderProps) {
    this.idPedido = order.idPedido;
    this.descricao = order.descricao;
    this.fkCliente = order.fkCliente;
    this.dataPedido = order.dataPedido;
  }

  get object(): OrderProps {
    return {
      idPedido: this.idPedido,
      descricao: this.descricao,
      fkCliente: this.fkCliente,
      dataPedido: this.dataPedido,
    };
  }
}
