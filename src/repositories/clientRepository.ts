import Client from "../models/Client";

const clients: Client[] = [];

async function getClient(id: number): Promise<Client | undefined> {
    return new Promise((resolve, reject) => {
        return resolve(clients.find(c => c.id === id));
    })
}

async function getClients(): Promise<Client[]> {
    return new Promise((resolve, reject) => {
        return resolve(clients);
    })
}


async function addClient(client: Client): Promise<Client> {
    return new Promise((resolve, reject) => {
        if (!client.name || !client.cpf) {
            return reject(new Error("Cliente Invalido!!"))
        }
        const newClient = new Client(client.name, client.cpf)
        clients.push(newClient)
        return resolve(newClient)
    })
}

async function updateClient(id: number, newClient: Client): Promise<Client | undefined> {
    return new Promise((resolve, reject) => {
        const index = clients.findIndex(c => c.id === id);
        if (index >= 0) {
            if (newClient.name && clients[index].name !== newClient.name)
                clients[index].name = newClient.name;

            if (newClient.cpf && clients[index].cpf !== newClient.cpf)
                clients[index].cpf = newClient.cpf;

            return resolve(clients[index]);
        }
        return resolve(undefined);
    })
}

async function deleteClient(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        const index = clients.findIndex(c => c.id === id);
        if (index >= 0) {
            clients.splice(index, 1);
            return resolve(true);
        }

        return resolve(false);
    })
}

export default {
    getClient,
    getClients,
    deleteClient,
    addClient,
    updateClient
}