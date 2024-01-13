import { ClienteRepository, PedidoRepository } from "../repositories";
import { ClienteProps } from "../interfaces";

export class ClienteServices {
  private clienteRepository: ClienteRepository;
  private pedidoRepository: PedidoRepository;
  constructor() {
    this.clienteRepository = new ClienteRepository();
    this.pedidoRepository = new PedidoRepository();
  }

  async CheckCliente(email: string, senha: string) {
    const response = await this.clienteRepository.CheckCliente(email, senha);
    if (!response) return null;
    return response;
  }

  async getClienteLogin(email: string, senha: string) {
    return await this.clienteRepository.getClienteLogin(email, senha);
  }

  async getCliente(idCliente: number) {
    const cliente = await this.clienteRepository.getCliente(idCliente);
    if (!cliente) return null;
    return cliente;
  }

  async getPedidoCliente(idCliente: number, idPedido?: number) {
    const pedidos = await this.pedidoRepository.getPedidos();
    let pedidoCliente = null
    if (!pedidos) return null;
    if(!idPedido){
      pedidoCliente = pedidos.filter(
        (pedido) => pedido.fkCliente === idCliente
      );
    }
    else{
      pedidoCliente = pedidos.filter(
        (pedido) => pedido.fkCliente === idCliente && pedido.idPedido === idPedido
      );
      return pedidoCliente[0];

    }
    return pedidoCliente;
  }

  async getClientes() {
    return await this.clienteRepository.getClientes();
  }
  async addCliente(cliente: ClienteProps) {
    if (!cliente) return null;
    return await this.clienteRepository.addCliente(cliente);
  }
  async updateCliente(cliente: ClienteProps) {
    if (!cliente) return null;
    return await this.clienteRepository.updateCliente(cliente);
  }
}
