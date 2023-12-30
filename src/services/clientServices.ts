import { ClientRepository } from "../repositories";
import { ClientProps, ResponseBodyProps } from "../interfaces";
import Client from "src/models/Client";

export class ClientServices {
  private clientRepository: ClientRepository;
  constructor() {
    this.clientRepository = new ClientRepository();
  }

  async getClient(idCliente: number) {
    const cliente = await this.clientRepository.getClient(idCliente);
    if (!cliente) return null;
    return cliente;
  }
  async getClients() {
    return await this.clientRepository.getClients();
  }
  async addClient(cliente: ClientProps) {
    if (!cliente) return null;
    return await this.clientRepository.addClient(cliente);
  }
  async updateClient(cliente: ClientProps) {
    if (!cliente) return null;
    return await this.clientRepository.updateClient(cliente);
  }
}
