import { PedidoProps } from "../interfaces";

export default class Pedido {
  idPedido: number;
  descricao: string;
  fkCliente: number;
  dataPedido: string;
  statusPedido: number;

  constructor(Pedido: PedidoProps) {
    this.idPedido = Pedido.idPedido;
    this.descricao = Pedido.descricao;
    this.fkCliente = Pedido.fkCliente;
    this.dataPedido = Pedido.dataPedido;
    this.statusPedido = Pedido.statusPedido;
  }

  get object(): PedidoProps {
    return {
      idPedido: this.idPedido,
      descricao: this.descricao,
      fkCliente: this.fkCliente,
      dataPedido: this.dataPedido,
      statusPedido: this.statusPedido
    };
  }
}
