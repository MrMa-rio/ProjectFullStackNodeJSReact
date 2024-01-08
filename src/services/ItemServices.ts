import { ItemProps } from "../interfaces";
import { ItemRepository } from "../repositories";

export class ItemServices {
  private itemRepository: ItemRepository;
  constructor() {
    this.itemRepository = new ItemRepository();
  }

  async getItem(idItem: number) {
    try {
      return await this.itemRepository.getItem(idItem);
    } catch (error) {
      return null
    }
  }
  async addItem(item: Omit<ItemProps, "idItem">) {
    return await this.itemRepository.addItem(item);
  }
  async getItems() {
    return await this.itemRepository.getItems();
  }
  async updateItem(item: ItemProps) {
    if (!item) return null;
    return await this.itemRepository.updateItem(item.idItem, item);
  }
  async deleteItem(idItem: number) {
    if(!idItem || isNaN(idItem)) return new Error("Falha na operacao")
    return await this.itemRepository.deleteItem(idItem)
  }
}
