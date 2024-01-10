import { QueryError } from "mysql2";
import {
  ClienteProps,
  OrderProps,
  DBGeneric,
  ItemOrderProps,
  ItemProps,
  UsuarioProps,
} from "../interfaces";
import { connection } from "./configConnection";
import Cliente from "../models/Cliente";
import Order from "../models/Order";
import ItemOrder from "../models/ItemOrder";
import Item from "../models/Item";
import { StatusCodeCliente, StatusCodeUsuario } from "src/interfaces/StatusProps/StatusProps";

export default class DB implements DBGeneric {
  // Clientes

  async getClientes() {
    try {
      const sql = `SELECT * FROM db_restaurant.tb_cliente;`;
      const resultados: ClienteProps[] | undefined = await new Promise(
        (resolve, reject) => {
          connection.query(sql, (error, results: Cliente[]) => {
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

  async getCliente(idCliente: number) {
    try {
      const sql = `SELECT * FROM db_restaurant.tb_cliente where idCliente = ${idCliente} ;`;
      const resultados: ClienteProps[] = await new Promise((resolve, reject) => {
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

  async addCliente(cliente: Omit<ClienteProps, "idCliente">) {
    try {
      const sql = `call db_restaurant.addClient('${cliente.nome}', '${cliente.cpf}', '${cliente.imagem_64}', '${cliente.senha}', '${cliente.data_nascimento}');`;
      const resultados: ClienteProps[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error: QueryError, results: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(results[0]);
          }
        });
      });
      return new Cliente(resultados[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async updateCliente(cliente: ClienteProps) {
    try {
      const sql = `call db_restaurant.updateClient(${cliente.idCliente}, '${cliente.nome}', '${cliente.cpf}', '${cliente.imagem_64}', '${cliente.senha}', '${cliente.data_nascimento}');`;
      const resultados: ClienteProps[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error, results: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(results[0]);
          }
        });
      });
      return new Cliente(resultados[0]);
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
      console.log(order);
      const sql = `call db_restaurant.addOrder('${order.dataPedido}', '${order.fkCliente}', '${order.descricao}');`;
      const resultados: OrderProps[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error, results: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(results[0]);
          }
        });
      });
      return resultados[0];
    } catch (error) {
      console.log(error);
    }
  }

  async deleteOrder(idPedido: number) {
    try {
      const sql = `call db_restaurant.deleteOrder(${idPedido});`;
      const resultados = await new Promise((resolve, reject) => {
        connection.query(sql, (error, results: OrderProps) => {
          if (error) {
            reject(error);
          } else {
            //console.log(results);
            resolve(results);
          }
        });
      });
      return { status: 200, message: "Operacao realizada com sucesso!" };
    } catch (error) {
      console.error(error);
      return { status: 400, message: "Falha na operacao!" };
    }
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
              //console.log(results);
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
            //throw "Falha na operacao";
          } else {
            //console.log(results);
            resolve(results);
          }
        });
      });
      return resultados[0];
    } catch (error) {
      return null
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
            //console.log(results);
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
      const sql = `call db_restaurant.addItem('${item.nome}', '${item.preco_unitario}', '${item.imagem_64}');`;
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
      return resultados[0];
    } catch (error) {
      //console.log(results).log(error);
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
      //console.log(results).log(error);
    }
  }

  async deleteItem(idItem: number) {
    const sql = `call db_restaurant.deleteItem(${idItem});`;
    const resultados = await new Promise((resolve, reject) => {
      connection.query(sql, (error: QueryError, results: ItemProps) => {
        if (error) {
          reject(error);
        } else {
          //console.log(results).log(results);
          resolve(results);
        }
      });
    });
  }
  async CheckUsuario(email: string, senha: string) {
    try {
      const sql = `call db_restaurant.ChecaUsuarioSenha('${email}', '${senha}');`;
      const resultados: StatusCodeUsuario[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error: QueryError, results: any) => {
          if (error) {
            reject(error);
          } else {
            //console.log(results).log(results[0]);
            resolve(results[0]);
          }
        });
      });
      return resultados[0];
    } catch (error) {
      //console.log(results).error(error)
    }
  }
  async CheckCliente(email: string, senha: string) {
    try {
      const sql = `call db_restaurant.ChecaClienteSenha('${email}', '${senha}');`;
      const resultados: StatusCodeCliente[] = await new Promise((resolve, reject) => {
        connection.query(sql, (error: QueryError, results: any) => {
          if (error) {
            reject(error);
          } else {
            //console.log(results).log(results[0]);
            resolve(results[0]);
          }
        });
      });
      return resultados[0];
    } catch (error) {
      //console.log(results).error(error)
    }
  }

  async getUsuarioLogin(nome: string, senha: string) {
    try {
        const sql = `call db_restaurant.getUsuario('${nome}', '${senha}');`
        const resultados: UsuarioProps[] = await new Promise((resolve, reject) => {
          connection.query(sql, (error: QueryError, results: any) => {
            if (error || !results[0]) {
              reject(error);
              //throw "Falha na operacao";
            } else {
              //console.log(results).log(results);
              resolve(results);
            }
          });
        });
        return resultados[0];
    } catch (error) {
      //console.log(results).error(error)
    }
  }
  async getClienteLogin(email: string, senha: string) {
    try {
        const sql = `call db_restaurant.getCliente('${senha}', '${senha}');`
        const resultados: ClienteProps[] = await new Promise((resolve, reject) => {
          connection.query(sql, (error: QueryError, results: any) => {
            if (error || !results[0]) {
              reject(error);
              //throw "Falha na operacao";
            } else {
              //console.log(results).log(results);
              resolve(results);
            }
          });
        });
        return resultados[0];
    } catch (error) {
      //console.log(results).error(error)
    }
  }
}
