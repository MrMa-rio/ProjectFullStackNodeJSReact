import { ClientProps, OrderProps } from "../../interfaces";

export interface DBGeneric {
  getClients: () => {};
  getClient: (idCliente: number) => {};
  addClient: (client: ClientProps) => {};
  updateClient: (client: ClientProps) => {};

  getOrder: (idPedido: number) => {};
  addOrder: (order: OrderProps) => {};
  deleteOrder: (idPedido: number) => {};
}
