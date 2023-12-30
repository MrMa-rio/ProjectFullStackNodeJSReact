import { OrderProps } from "../interfaces";
import DB from "../data/db";
import Order from "../models/Order";

export class OrderRepository {
  private DB: DB;

  constructor() {
    this.DB = new DB();
  }
  async addOrder(neworder: Omit<OrderProps, "idPedido">) {
    const order = await this.DB.addOrder(neworder);
    if (!order) return null;
    return new Order(order);
  }
  async getOrders() {
    const orders = await this.DB.getOrders();
    if (!orders) return [];
    return orders?.map((order) => new Order(order));
  }
  async getOrder(idCliente: number) {
    const order = await this.DB.getOrder(idCliente);
    if (!order) return null;
    return new Order(order);
  }
  
  async deleteOrder(idPedido: number) {
    return await this.DB.deleteOrder(idPedido);
  }
}
