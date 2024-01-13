import { ClienteProps, PedidoProps } from "../../interfaces";
import { ItemProps } from "../ItemProps/ItemProps";

export interface DBGeneric {
  getClientes: () => {};
  getCliente: (idCliente: number) => {};
  addCliente: (client: ClienteProps) => {};
  updateCliente: (client: ClienteProps) => {};

  getPedidos: () => {};
  getPedido: (idPedido: number) => {};
  addPedido: (Pedido: PedidoProps) => {};
  deletePedido: (idPedido: number) => {};

  getItem: (idItem: number) => {}
  addItem: (item: ItemProps) => {}
  updateItem: (idItem: number,item: ItemProps) => {}
  deleteItem: (idItem: number) => {}
}
