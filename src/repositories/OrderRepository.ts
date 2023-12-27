import { OrderProps } from "src/interfaces";
import DB from "../data/db";
import Order from "../models/Order";
import ItemOrder from "../models/ItemOrder";

export class OrderRepository {
  #DB: DB;

  constructor() {
    this.#DB = new DB();
  }
  async addOrder(order: Omit<OrderProps, "idPedido">) {
    const addOrder = await this.#DB.addOrder(order);
    if (!addOrder) return null;
    return new Order(addOrder);
  }
  async getOrders() {
    const orders = await this.#DB.getOrders();
    if (!orders) return [];
    return orders?.map((order) => new Order(order));
  }
  async getOrder(idCliente: number) {
    const order = await this.#DB.getOrder(idCliente);
    if (!order) return null;
    return new Order(order);
  }
  async getItemsOrder(idOrder: number) {
    const itemsOrder = await this.#DB.getItemsOrder(idOrder);
    return itemsOrder?.map((itemOrder) => new ItemOrder(itemOrder));
  }

  async deleteOrder(idPedido: number) {
    return await this.#DB.deleteOrder(idPedido);
  }
}
