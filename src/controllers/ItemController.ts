import { NextFunction, Request, Response } from "express";
import { ItemServices } from "../services";

export class ItemController {
  private itemServices: ItemServices;
  constructor() {
    this.itemServices = new ItemServices();
  }

  async getItem(req: Request, res: Response, next: NextFunction) {
    try {
      const item = req.params.idItem;
      if (isNaN(Number(item)))
        return res.status(400).json({ message: " Erro Generico na Operação " }); //Caberia uma chamada no banco para trazer mensagens dinamica do mesmo.
      const response = await this.itemServices.getItem(Number(item));
      if (!response)
        return res.status(404).json({status:404, message: " Item não encontrado " }); 
      return res.status(200).json(response);
    } catch (e) {
      return next(e);
    }
  }
  async addItem(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.itemServices.addItem(req.body);
      console.log(response)
      if (!response) {
        return res.status(400).json({ message: " Erro Generico na Operação " });
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
        return res.status(400).json({ message: " Erro Generico na Operação " });
      return res.status(200).json(response);
    } catch (error) {
      //return next(error);
    }
  }
  async updateItem(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.itemServices.updateItem(req.body);
      if (!response) {
        return res.status(400).json({ message: " Erro Generico na Operação " });
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
        return res.status(400).json({ message: " Erro Generico na Operação " });
      }
      const response = await this.itemServices.deleteItem(item);
      return res
        .status(200)
        .json({ status: 200, message: "Excluido com sucesso" });
    } catch (error) {
      return next(error);
    }
  }
}
