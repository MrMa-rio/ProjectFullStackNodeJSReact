import { NextFunction, Request, Response } from "express";
import { ClienteServices } from "../services";

export class ClienteController {
  private clienteServices: ClienteServices;

  constructor() {
    this.clienteServices = new ClienteServices();
  }
  async getClientes(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.clienteServices.getClientes();
      return res.status(200).json(response);
    } catch (e) {
      return next(e);
    }
  }

  async getCliente(req: Request, res: Response, next: NextFunction) {
    try {
      const cliente = req.params.idCliente;
      if (isNaN(Number(cliente)))
        return res.status(400).json({ message: " Erro generico na operacao " }); //Caberia uma chamada no banco para trazer mensagens dinamica do mesmo.
      const response = await this.clienteServices.getCliente(Number(cliente));
      if (!response)
        return res.status(400).json({ message: " Erro generico na operacao " }); 
      return res.status(200).json(response);
    } catch (e) {
      return next(e);
    }
  }

  async addCliente(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      const response = await this.clienteServices.addCliente(req.body);
      if (!response)
        return res.status(400).json({ message: " Erro generico na operacao " });
      return res.status(200).json(response);
    } catch (e) {
      return next(e);
    }
  }

  async updateCliente(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      const response = await this.clienteServices.updateCliente(req.body);
      if (!response)
        return res.status(400).json({ message: " Erro generico na operacao " });
      return res.status(200).json(response);
    } catch (e) {
      return next(e);
    }
  }
}
