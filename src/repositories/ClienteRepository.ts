import { ClienteProps } from "../interfaces";
import Cliente from "../models/Cliente";
import DB from "../data/db";

export class ClienteRepository {
  private DB: DB;

  constructor() {
    this.DB = new DB();
  }

  async getClientes() {
    const clientes = await this.DB.getClientes();
    if (!clientes) return [];
    return clientes?.map((cliente) => new Cliente(cliente));
  }

  async getCliente(idCliente: number) {
    const cliente = await this.DB.getCliente(idCliente);
    if(!cliente) return null
    return new Cliente(cliente);
  }

  async addCliente(cliente: Omit<ClienteProps, "idCliente">) {
    const addCliente = await this.DB.addCliente(cliente);
    if (!addCliente) return null;
    return new Cliente(addCliente);
  }

  async updateCliente(cliente: ClienteProps) {
    const old_cliente = await this.DB.getCliente(cliente.idCliente);
    if (!old_cliente) return null;
    const updated_cliente = await this.DB.updateCliente({
      ...old_cliente,
      ...cliente,
    });
    if (updated_cliente) return new Cliente(updated_cliente);
  }
}
