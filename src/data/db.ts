import { QueryError } from "mysql2";
import {
  ClientProps,
  OrderProps,
  DBGeneric,
  ItemOrderProps,
  ItemProps,
} from "../interfaces";
import { connection } from "./configConnection";
import Client from "../models/Client";
import Order from "../models/Order";
import ItemOrder from "../models/ItemOrder";
import Item from "../models/Item";

export default class DB implements DBGeneric {
  // Clientes

  async getClients() {
    try {
      const sql = `SELECT * FROM db_restaurant.tb_cliente;`;
      const resultados: ClientProps[] | undefined = await new Promise(
        (resolve, reject) => {
          connection.query(sql, (error, results: Client[]) => {
            if (error || !results[0]) {
              reject(error);
            } else {
              resolve(results);
            }
          });
        }
      );
      return resultados;
    } catch (error) {
      console.log(error);
    }
  }

  async getClient(idCliente: number) {
    try {
      const sql = `SELECT * FROM db_restaurant.tb_cliente where idCliente = ${idCliente} ;`;
      const resultados: ClientProps[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error, results: any) => {
          if (error || !results[0]) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      return resultados[0];
    } catch (error) {
      console.log(error);
    }
  }

  async addClient(client: Omit<ClientProps, "idCliente">) {
    try {
      const sql = `call db_restaurant.addClient('${client.nome}', '${client.cpf}', '${client.telefone}');`;
      const resultados: ClientProps[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error: QueryError, results: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(results[0]);
          }
        });
      });
      return new Client(resultados[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async updateClient(client: ClientProps) {
    try {
      const sql = `call db_restaurant.updateClient('${client.nome}', '${client.cpf}', '${client.telefone}', ${client.idCliente});`;
      const resultados: ClientProps[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error, results: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(results[0]);
          }
        });
      });
      return new Client(resultados[0]);
    } catch (error) {
      console.log(error);
    }
  }

  // Pedidos

  async getOrders() {
    try {
      const sql = `SELECT * FROM db_restaurant.tb_pedido;`;
      const resultados: OrderProps[] | undefined = await new Promise(
        (resolve, reject) => {
          connection.query(sql, (error, results: Order[]) => {
            if (error || !results[0]) {
              reject(error);
            } else {
              resolve(results);
            }
          });
        }
      );
      return resultados;
    } catch (error) {
      console.log(error);
    }
  }

  async getOrder(idPedido: number) {
    try {
      const sql = `SELECT * FROM db_restaurant.tb_pedido where idPedido = ${idPedido} ;`;
      const resultados: OrderProps[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error, results: Order[]) => {
          if (error) {
            reject(error);
          } else {
            console.log(results);
            resolve(results);
          }
        });
      });
      return resultados[0];
    } catch (error) {
      console.log(error);
    }
  }

  async addOrder(order: Omit<OrderProps, "idPedido">) {
    try {
      const sql = `call db_restaurant.addOrder('${order.dataPedido}', '${order.idCliente}', '${order.descricao}');`;
      const resultados: OrderProps[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error, results: any) => {
          if (error) {
            reject(error);
          } else {
            console.log(results[0]);
            resolve(results[0]);
          }
        });
      });
      return new Order(resultados[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteOrder(idPedido: number) {
    const sql = `call db_restaurant.deleteOrder(${idPedido});`;
    const resultados = await new Promise((resolve, reject) => {
      connection.query(sql, (error, results: OrderProps) => {
        if (error) {
          reject(error);
        } else {
          console.log(results);
          resolve(results);
        }
      });
    });
  }

  async getItemsOrder(idOrder: number) {
    try {
      const sql = `SELECT * FROM db_restaurant.tb_itenspedido where fkPedido = ${idOrder};`;
      const resultados: ItemOrderProps[] = await new Promise(
        (resolve, reject) => {
          connection.query(sql, (error, results: ItemOrder[]) => {
            if (error) {
              reject(error);
            } else {
              console.log(results);
              resolve(results);
            }
          });
        }
      );
      return resultados;
    } catch (error) {
      console.log(error);
    }
  }

  async addItemsOrder(itemInOrder: Omit<ItemOrderProps, "id">) {
    try {
      const sql = `call db_restaurant.addItemInOrder(${itemInOrder.fkPedido}, ${itemInOrder.fkItem}, ${itemInOrder.quantidade}, ${itemInOrder.preco_unitario});`;
      const resultados: ItemOrderProps = await new Promise(
        (resolve, reject) => {
          connection.query(sql, (error, results: any) => {
            if (error) {
              reject(error);
            } else {
              //console.log(results[0][0]); //Ele nao e afetado pela promisse
              resolve(results[0][0]);
            }
          });
        }
      );
      return resultados;
    } catch (error) {
      console.log(error);
    }
  }

  // Itens

  async getItem(idItem: number) {
    try {
      const sql = `SELECT * FROM db_restaurant.tb_item where idItem = ${idItem};`;
      const resultados: ItemProps[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error: QueryError, results: any) => {
          if (error || !results[0]) {
            reject(error);
            throw "Falha na operacao";
          } else {
            console.log(results);
            resolve(results);
          }
        });
      });
      return resultados[0];
    } catch (error) {
      console.log(error);
    }
  }
  async getItems() {
    try {
      const sql = `SELECT * FROM db_restaurant.tb_item;`;
      const resultados: ItemProps[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error, results: Item[]) => {
          if (error) {
            reject(error);
          } else {
            console.log(results);
            resolve(results);
          }
        });
      });
      return resultados;
    } catch (error) {
      console.log(error);
    }
  }

  async addItem(item: Omit<ItemProps, "idItem">) {
    try {
      const sql = `call db_restaurant.addItem('${item.nome}', ${item.preco_unitario});`;
      const resultados: ItemProps[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error, results: any) => {
          if (error) {
            reject(error);
          } else {
            console.log(results[0]);
            resolve(results[0]);
          }
        });
      });
      return new Item(resultados[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async updateItem(idItem: number, item: Partial<ItemProps>) {
    try {
      const sql = `call db_restaurant.updateItem('${item.nome}', ${item.preco_unitario}, ${idItem});`;
      const resultados: ItemProps[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error, results: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(results[0]);
          }
        });
      });
      return new Item(resultados[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteItem(idItem: number) {
    const sql = `call db_restaurant.deleteItem(${idItem});`;
    const resultados = await new Promise((resolve, reject) => {
      connection.query(sql, (error, results: ItemProps) => {
        if (error) {
          reject(error);
        } else {
          console.log(results);
          resolve(results);
        }
      });
    });
  }
}
