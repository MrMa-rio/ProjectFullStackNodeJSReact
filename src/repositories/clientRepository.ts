import { ClientProps, DBGeneric, OrderProps } from "src/interfaces";
import DB from "../data/db";
import Client from "../models/Client";

export default class ClientRepository implements DBGeneric {
  #DB: DB;

  constructor() {
    this.#DB = new DB();
  }

  async getClients() {
    const clientes = await this.#DB.getClients();
    return clientes?.map((cliente) => new Client(cliente));
  }

  async getClient(idCliente: number) {
    const cliente = await this.#DB.getClient(idCliente);
    return cliente?.map((cliente) => new Client(cliente));
  }

  async addClient(client: Omit<ClientProps, "idCliente">) {
    const addClient = await this.#DB.addClient(client);
    if (!addClient) return null;
    return new Client(addClient);
  }

  async updateClient(client: ClientProps) {
    const old_client = await this.#DB.getClient(client.idCliente);
    if (!old_client) return null;
    const updated_client = await this.#DB.updateClient({
      ...old_client,
      ...client,
    });
    if (updated_client) return new Client(updated_client);
  }

  getOrder(idPedido: number) {
    return "";
  }
  addOrder(order: OrderProps) {
    return "";
  }
  deleteOrder(idPedido: number) {
    return "";
  }
}

// async function getClients(): Promise<Client[]> {
//     return new Promise((resolve, reject) => {
//         return resolve(clients);
//     })
// }

// async function addClient(client: Client): Promise<Client> {
//     return new Promise((resolve, reject) => {
//         if (!client.name || !client.cpf) {
//             return reject(new Error("Cliente Invalido!!"))
//         }
//         const newClient = new Client(client.name, client.cpf)
//         clients.push(newClient)
//         return resolve(newClient)
//     })
// }

// async function updateClient(id: number, newClient: Client): Promise<Client | undefined> {
//     return new Promise((resolve, reject) => {
//         const index = clients.findIndex(c => c.id === id);
//         if (index >= 0) {
//             if (newClient.name && clients[index].name !== newClient.name)
//                 clients[index].name = newClient.name;

//             if (newClient.cpf && clients[index].cpf !== newClient.cpf)
//                 clients[index].cpf = newClient.cpf;

//             return resolve(clients[index]);
//         }
//         return resolve(undefined);
//     })
// }

// async function deleteClient(id: number): Promise<boolean> {
//     return new Promise((resolve, reject) => {
//         const index = clients.findIndex(c => c.id === id);
//         if (index >= 0) {
//             clients.splice(index, 1);
//             return resolve(true);
//         }

//         return resolve(false);
//     })
// }

// export default {
//     getClient,
//     getClients,
//     deleteClient,
//     addClient,
//     updateClient
// }
