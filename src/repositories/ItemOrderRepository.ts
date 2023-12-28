import ItemOrder from "../models/ItemOrder";
import DB from "../data/db";
import { ItemOrderProps } from "../interfaces";

export default class ItemOrderRepository {
  #DB: DB;

  constructor() {
    this.#DB = new DB();
  }

  // async addItemsOrder(itemOrder: Omit<ItemOrderProps, "id">[]) {
  //   const _itemOrder:ItemOrderProps[] = []
  //   itemOrder.map(async (teste) => await this.#DB.addItemsOrder(teste).then(sucesso => sucesso && _itemOrder.push(sucesso))) // TODO: analisar a logica dessa arvore
  //   if(!_itemOrder) return null
  //   console.log(_itemOrder)
  //   return _itemOrder
  // }


  async getItemsOrder(idOrder: number) {
    const itemsOrder = await this.#DB.getItemsOrder(idOrder);
    return itemsOrder?.map((itemOrder) => new ItemOrder(itemOrder));
  }

}