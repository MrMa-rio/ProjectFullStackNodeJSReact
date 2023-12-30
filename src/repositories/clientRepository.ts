import { ClientProps } from "../interfaces";
import Client from "../models/Client";
import DB from "../data/db";

export class ClientRepository {
  private DB: DB;

  constructor() {
    this.DB = new DB();
  }

  async getClients() {
    const clientes = await this.DB.getClients();
    if (!clientes) return [];
    return clientes?.map((cliente) => new Client(cliente));
  }

  async getClient(idCliente: number) {
    const cliente = await this.DB.getClient(idCliente);
    if(!cliente) return null
    return new Client(cliente);
  }

  async addClient(client: Omit<ClientProps, "idCliente">) {
    const addClient = await this.DB.addClient(client);
    if (!addClient) return null;
    return new Client(addClient);
  }

  async updateClient(client: ClientProps) {
    const old_client = await this.DB.getClient(client.idCliente);
    if (!old_client) return null;
    const updated_client = await this.DB.updateClient({
      ...old_client,
      ...client,
    });
    if (updated_client) return new Client(updated_client);
  }
}
