import { OrderRepository } from "src/repositories";
import { OrderProps } from "../interfaces";

export default class OrderServices {
  orderRepository: OrderRepository;

  constructor() {
    this.orderRepository = new OrderRepository();
  }

  async getOrder(idOrder: number) {
    const order = await this.orderRepository.getOrder(idOrder);
    if (!order) return null;
    return order;
  }
  async getOrders() {
    return await this.orderRepository.getOrders();
  }
  async addOrder(order: OrderProps) {
    return await this.orderRepository.addOrder(order);
  }
  async deleteOrder(idPedido: number) {
    return await this.orderRepository.deleteOrder(idPedido);
  }
}
