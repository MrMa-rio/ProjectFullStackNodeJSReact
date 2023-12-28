import { ItemOrderProps } from "src/interfaces";
import ItemOrderRepository from "../repositories/ItemOrderRepository";

export default class ItemOrderServices {
  itemOrderRepository: ItemOrderRepository;

  constructor() {
    this.itemOrderRepository = new ItemOrderRepository();
  }

  async getItemsOrder(idPedido: number) {
    return await this.itemOrderRepository.getItemsOrder(idPedido);
  }

  // async addItemsOrder(itemsOrder: Omit<ItemOrderProps, "id">[]) {
    
  //   return await this.itemOrderRepository.addItemsOrder(itemsOrder); //analisar essa parte
  // }
}
