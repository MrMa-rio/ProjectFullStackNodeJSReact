import { PedidoRepository } from "../repositories";
import { PedidoProps } from "../interfaces";

export class PedidoServices {
  private PedidoRepository: PedidoRepository;

  constructor() {
    this.PedidoRepository = new PedidoRepository();
  }

  async getPedido(idPedido: number) {
    const Pedido = await this.PedidoRepository.getPedido(idPedido);
    if (!Pedido) return null;
    return Pedido;
  }
  async getPedidos() {
    return await this.PedidoRepository.getPedidos();
  }
  async addPedido(Pedido: PedidoProps) {
    return await this.PedidoRepository.addPedido(Pedido);
  }
  async deletePedido(idPedido: number) {
    return await this.PedidoRepository.deletePedido(idPedido);
  }
}
