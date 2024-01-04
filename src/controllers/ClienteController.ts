import { NextFunction, Request, Response } from "express";
import { ClienteServices } from "../services";
import { verify } from "jsonwebtoken";

const secret_key = process.env.SECRET_KEY as string;


export class ClienteController {
  private clienteServices: ClienteServices;

  constructor() {
    this.clienteServices = new ClienteServices();
  }
  async getClientes(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers["authorization"] as string
      const token_ = token.includes("Bearer") && token.substring(7, token.length) || token //Retira a assinatura Bearer do token
      const isValid = verify(token_, secret_key)
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
