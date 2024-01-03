import { ClienteProps, OrderProps } from "../../interfaces";
import { ItemProps } from "../ItemProps/ItemProps";

export interface DBGeneric {
  getClientes: () => {};
  getCliente: (idCliente: number) => {};
  addCliente: (client: ClienteProps) => {};
  updateCliente: (client: ClienteProps) => {};

  getOrders: () => {};
  getOrder: (idPedido: number) => {};
  addOrder: (order: OrderProps) => {};
  deleteOrder: (idPedido: number) => {};

  getItem: (idItem: number) => {}
  addItem: (item: ItemProps) => {}
  updateItem: (idItem: number,item: ItemProps) => {}
  deleteItem: (idItem: number) => {}
}
