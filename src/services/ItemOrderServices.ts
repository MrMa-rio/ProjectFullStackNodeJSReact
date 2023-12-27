import { ItemOrderProps } from "src/interfaces";
import ItemOrderRepository from "src/repositories/ItemOrderRepository";

export default class ItemOrderServices {
  itemOrderRepository: ItemOrderRepository;

  constructor() {
    this.itemOrderRepository = new ItemOrderRepository();
  }

  async getItemsOrder(idPedido: number) {
    return await this.itemOrderRepository.getItemsOrder(idPedido);
  }
  async addItemInOrder(idPedido: number, itemInOrder: ItemOrderProps[]) {
    return itemInOrder.map(async (itemInOrder) => {
        return await this.itemOrderRepository.addItemsOrder(idPedido, itemInOrder) //analisar essa parte 
    } )
  }
}
