import ItemOrder from "src/models/ItemOrder";
import DB from "../data/db";
import { ItemOrderProps } from "src/interfaces";

export default class ItemOrderRepository {
  #DB: DB;

  constructor() {
    this.#DB = new DB();
  }

  async addItemsOrder(idPedido:number, itemOrder: ItemOrderProps) {
    return await this.#DB.addItemInOrder(idPedido, itemOrder) // TODO: analisar a logica dessa arvore
  }
  async getItemsOrder(idOrder: number) {
    const itemsOrder = await this.#DB.getItemsOrder(idOrder);
    return itemsOrder?.map((itemOrder) => new ItemOrder(itemOrder));
  }

}