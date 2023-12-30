import ItemOrder from "../models/ItemOrder";
import DB from "../data/db";
import { ItemOrderProps } from "../interfaces";

export class ItemOrderRepository {
  private DB: DB;

  constructor() {
    this.DB = new DB();
  }

  async addItemsOrder(itemOrder: Omit<ItemOrderProps, "id">[]) {
    return await Promise.all(itemOrder.map(async (result) => {
      return await this.DB.addItemsOrder(result)
    }))
  }

  async getItemsOrder(idOrder: number) {
    const itemsOrder = await this.DB.getItemsOrder(idOrder);
    return itemsOrder?.map((itemOrder) => new ItemOrder(itemOrder));
  }
}
