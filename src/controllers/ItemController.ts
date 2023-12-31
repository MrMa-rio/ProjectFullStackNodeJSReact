import { NextFunction, Request, Response } from "express";
import { ItemServices } from "../services";

export class ItemController {
  private itemServices: ItemServices;
  constructor() {
    this.itemServices = new ItemServices();
  }

  async getItem(req: Request, res: Response, next: NextFunction) {
    try {
      const item = Number(req.params.idItem);
      if (isNaN(item))
        return res.status(400).json({ message: " Erro generico na operacao " }); //Caberia uma chamada no banco para trazer mensagens dinamica do mesmo.
      const response = await this.itemServices.getItem(Number(item));
      if (!response)
        return res.status(400).json({ message: " Erro generico na operacao " });
      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }
  async addItem(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.itemServices.addItem(req.body);
      if (!response) {
        return res.status(400).json({ message: " Erro generico na operacao " });
      }
      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }
  async getItems(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.itemServices.getItems();
      if (!response)
        return res.status(400).json({ message: " Erro generico na operacao " });
      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }
  async updateItem(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.itemServices.updateItem(req.body);
      if (!response) {
        return res.status(400).json({ message: " Erro generico na operacao " });
      }
      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }
  async deleteItem(req: Request, res: Response, next: NextFunction) {
    try {
      const item = Number(req.params.idItem);
      if (isNaN(item)) {
        return res.status(400).json({ message: " Erro generico na operacao " });
      }
      const response = await this.itemServices.deleteItem(item);
      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }
}
