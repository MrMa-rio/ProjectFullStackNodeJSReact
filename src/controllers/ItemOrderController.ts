import { NextFunction, Request, Response } from "express";
import { ItemOrderServices } from "../services";

export class ItemOrderController {
  private itemOrderServices: ItemOrderServices;
  constructor() {
    this.itemOrderServices = new ItemOrderServices();
  }

  async getItemsOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const fkPedido = Number(req.params.fkPedido);
      if (isNaN(fkPedido))
        return res.status(400).json({ status:400, message: " Erro Generico na Operação " });
      const response = await this.itemOrderServices.getItemsOrder(fkPedido);
      if (!response)
        return res.status(400).json({ status:400, message: " Erro Generico na Operação " });
      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }

  async addItemsOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const itemsOrder = req.body;
      if (Object.keys(itemsOrder).length == 0) {
        return res.status(400).json({ message: " Erro Generico na Operação " });
      }
      const response = await this.itemOrderServices.addItemsOrder(itemsOrder);
      if (!response)
        return res.status(400).json({ message: " Erro Generico na Operação " });
      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }
}
