import { QueryError } from "mysql2";
import { ClientProps, OrderProps, DBGeneric } from "../interfaces";
import { connection } from "./configConnection";
import Client from "../models/Client";

export default class DB implements DBGeneric {
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

  async getOrder(idPedido: number) {
    try {
      const sql = `SELECT * FROM db_restaurant.tb_pedido where idPedido = ${idPedido} ;`;
      const resultados: OrderProps[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error, results: OrderProps[]) => {
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

  async addOrder(order: OrderProps) {
    try {
      const sql = `call db_restaurant.addOrder('${order.dataPedido}', '${order.idCliente}', '${order.descricao}');`;
      const resultados: OrderProps[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error, results: OrderProps[]) => {
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
}
