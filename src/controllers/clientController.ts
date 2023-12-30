import { NextFunction, Request, Response } from "express";
import { ClientServices } from "../services";

export class ClientController {
  private clientServices: ClientServices;

  constructor() {
    this.clientServices = new ClientServices();
  }
  async getClients(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.clientServices.getClients();
      return res.status(200).json(response);
    } catch (e) {
      return next(e);
    }
  }

  async getClient(req: Request, res: Response, next: NextFunction) {
    try {
      const cliente = req.params.idCliente;
      if (isNaN(Number(cliente)))
        return res.status(400).json({ message: " Erro generico na operacao " }); //Caberia uma chamada no banco para trazer mensagens dinamica do mesmo.
      const response = await this.clientServices.getClient(Number(cliente));
      if (!response)
        return res.status(400).json({ message: " Erro generico na operacao " }); 
      return res.status(200).json(response);
    } catch (e) {
      return next(e);
    }
  }

  async addClient(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      const response = await this.clientServices.addClient(req.body);
      if (!response)
        return res.status(400).json({ message: " Erro generico na operacao " });
      return res.status(200).json(response);
    } catch (e) {
      return next(e);
    }
  }

  async updateClient(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      const response = await this.clientServices.updateClient(req.body);
      if (!response)
        return res.status(400).json({ message: " Erro generico na operacao " });
      return res.status(200).json(response);
    } catch (e) {
      return next(e);
    }
  }
}
