import { ItemProps } from "../interfaces";
import DB from "../data/db";
import Item from "../models/Item";

export class ItemRepository {
  #DB: DB;

  constructor() {
    this.#DB = new DB();
  }

  async addItem(order: Omit<ItemProps, "idItem">) {
    const addItem = await this.#DB.addItem(order);
    if (!addItem) return null;
    return new Item(addItem);
  }
  async getItem(idItem: number) {
    const item = await this.#DB.getItem(idItem);
    if (!item) return {};
    return new Item(item);
  }
  async getItems() {
    const item = await this.#DB.getItems();
    return item?.map((item) => new Item(item));
  }
  async updateItem(idItem: number, item: Partial<ItemProps>) {
    const old_item = await this.#DB.getItem(idItem);
    console.log(old_item);
    if (!old_item) return null;
    const updated_item = await this.#DB.updateItem(idItem, {
      ...old_item,
      ...item,
    });
    if (updated_item) return new Item(updated_item);
  }
  async deleteItem(idItem: number) {
    return await this.#DB.deleteItem(idItem);
  }
}
