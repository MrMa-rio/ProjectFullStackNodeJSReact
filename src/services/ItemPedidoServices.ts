import { ItemPedidoProps } from "../interfaces";
import { ItemPedidoRepository } from "../repositories";

export class ItemPedidoServices {
  private itemPedidoRepository: ItemPedidoRepository;

  constructor() {
    this.itemPedidoRepository = new ItemPedidoRepository();
  }

  async getItemsPedido(idPedido: number) {
    return await this.itemPedidoRepository.getItemsPedido(idPedido);
  }

  async addItemsPedido(itemsPedido: Omit<ItemPedidoProps, "id">[]) {
    return await this.itemPedidoRepository.addItemsPedido(itemsPedido); //analisar essa parte
  }
}
