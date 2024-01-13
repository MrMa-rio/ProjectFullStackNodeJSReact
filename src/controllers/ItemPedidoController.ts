import { NextFunction, Request, Response } from "express";
import { ItemPedidoServices } from "../services";

export class ItemPedidoController {
  private itemPedidoServices: ItemPedidoServices;
  constructor() {
    this.itemPedidoServices = new ItemPedidoServices();
  }

  async getItemsPedido(req: Request, res: Response, next: NextFunction) {
    try {
      const fkPedido = Number(req.params.fkPedido);
      if (isNaN(fkPedido))
        return res.status(400).json({ status:400, message: " Erro Generico na Operação " });
      const response = await this.itemPedidoServices.getItemsPedido(fkPedido);
      if (!response)
        return res.status(400).json({ status:400, message: " Erro Generico na Operação " });
      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }

  async addItemsPedido(req: Request, res: Response, next: NextFunction) {
    try {
      const itemsPedido = req.body;
      if (Object.keys(itemsPedido).length == 0) {
        return res.status(400).json({ message: " Erro Generico na Operação " });
      }
      const response = await this.itemPedidoServices.addItemsPedido(itemsPedido);
      if (!response)
        return res.status(400).json({ message: " Erro Generico na Operação " });
      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }
}
