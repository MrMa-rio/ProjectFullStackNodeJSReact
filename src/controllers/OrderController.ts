import { NextFunction, Request, Response } from "express";
import { OrderServices } from "../services";

export class OrderController {
  private orderServices: OrderServices;

  constructor() {
    this.orderServices = new OrderServices();
  }
  async getOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.orderServices.getOrders();
      if (Object.keys(req.query).length !== 0) {
        const teste = response.filter(order => {
          if(order.fkCliente == Number(req.query.fkCliente)) {
            return order
          }
        })
        return res.status(200).json(teste);
      }
      return res.status(200).json(response);

      // Analisar essa estrategia de filtrar os dados vindo do banco com os valores da requisicao
    } catch (e) {
      return next(e);
    }
  }

  async getOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const order = Number(req.params.idPedido);
      if (isNaN(order))
        return res.status(400).json({ message: " Erro generico na operacao " }); //Caberia uma chamada no banco para trazer mensagens dinamica do mesmo.
      const response = await this.orderServices.getOrder(order);
      if (!response)
        return res.status(400).json({ status:400, message: " Erro generico na operacao " });
      return res.status(200).json(response);
    } catch (e) {
      return next(e);
    }
  }
  async addOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.orderServices.addOrder(req.body);
      if (!response)
        return res.status(400).json({ message: " Erro generico na operacao " });
      return res.status(200).json(response);
    } catch (e) {
      return next(e);
    }
  }

  async deleteOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const order = Number(req.params.idPedido);
      if (isNaN(order))
        return res.status(400).json({ message: " Erro generico na operacao " }); //Caberia uma chamada no banco para trazer mensagens dinamica do mesmo.
      const response = await this.orderServices.deleteOrder(order);
      return res.status(response.status).json(response);
    } catch (e) {
      return next(e);
    }
  }
}
