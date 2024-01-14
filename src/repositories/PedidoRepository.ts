import { PedidoProps } from "../interfaces";
import DB from "../data/db";
import Pedido from "../models/Pedido";

export class PedidoRepository {
  private DB: DB;

  constructor() {
    this.DB = new DB();
  }
  async addPedido(newPedido: Omit<PedidoProps, "idPedido">) {
    const pedido = await this.DB.addPedido(newPedido);
    if (!pedido) return null;
    return new Pedido(pedido);
  }
  async getPedidos() {
    const pedidos = await this.DB.getPedidos();
    if (!pedidos) return [];
    return pedidos?.map((pedido) => new Pedido(pedido));
  }
  async getPedido(idCliente: number) {
    const pedido = await this.DB.getPedido(idCliente);
    if (!pedido) return null;
    return new Pedido(pedido);
  }
  async updateStatusPedido(idPedido: number, statusPedido: number) {
    return await this.DB.updateStatusPedido(idPedido, statusPedido);
  }
  async deletePedido(idPedido: number) {
    return await this.DB.deletePedido(idPedido);
  }
}
