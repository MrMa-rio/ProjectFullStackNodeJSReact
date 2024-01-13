import { PedidoProps } from "../interfaces";

export default class Pedido {
  idPedido: number;
  descricao: string;
  fkCliente: number;
  dataPedido: string;

  constructor(Pedido: PedidoProps) {
    this.idPedido = Pedido.idPedido;
    this.descricao = Pedido.descricao;
    this.fkCliente = Pedido.fkCliente;
    this.dataPedido = Pedido.dataPedido;
  }

  get object(): PedidoProps {
    return {
      idPedido: this.idPedido,
      descricao: this.descricao,
      fkCliente: this.fkCliente,
      dataPedido: this.dataPedido,
    };
  }
}
