import ItemPedido from "../models/ItemPedido";
import DB from "../data/db";
import { ItemPedidoProps } from "../interfaces";

export class ItemPedidoRepository {
  private DB: DB;

  constructor() {
    this.DB = new DB();
  }

  async addItemsPedido(itemPedido: Omit<ItemPedidoProps, "id">[]) {
    return await Promise.all(itemPedido.map(async (result) => {
      return await this.DB.addItemsPedido(result)
    }))
  }

  async getItemsPedido(idPedido: number) {
    const itemsPedido = await this.DB.getItemsPedido(idPedido);
    return itemsPedido?.map((itemPedido) => new ItemPedido(itemPedido));
  }
}
