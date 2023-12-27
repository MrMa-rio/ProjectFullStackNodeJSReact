import { ClientProps, OrderProps } from "../../interfaces";
import { ItemProps } from "../ItemProps/ItemProps";

export interface DBGeneric {
  getClients: () => {};
  getClient: (idCliente: number) => {};
  addClient: (client: ClientProps) => {};
  updateClient: (client: ClientProps) => {};

  getOrders: () => {};
  getOrder: (idPedido: number) => {};
  addOrder: (order: OrderProps) => {};
  deleteOrder: (idPedido: number) => {};

  getItem: (idItem: number) => {}
  addItem: (item: ItemProps) => {}
  updateItem: (idItem: number,item: ItemProps) => {}
  deleteItem: (idItem: number) => {}
}
