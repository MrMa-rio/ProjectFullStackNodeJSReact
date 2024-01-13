import { NextFunction, Request, Response } from "express";
import { PedidoServices } from "../services";

export class PedidoController {
  private PedidoServices: PedidoServices;

  constructor() {
    this.PedidoServices = new PedidoServices();
  }
  async getPedidos(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.PedidoServices.getPedidos();
      if (Object.keys(req.query).length !== 0) {
        const teste = response.filter(Pedido => {
          if(Pedido.fkCliente == Number(req.query.fkCliente)) {
            return Pedido
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

  async getPedido(req: Request, res: Response, next: NextFunction) {
    try {
      const Pedido = Number(req.params.idPedido);
      if (isNaN(Pedido))
        return res.status(400).json({ message: " Pedido inválido " }); //Caberia uma chamada no banco para trazer mensagens dinamica do mesmo.
      const response = await this.PedidoServices.getPedido(Pedido);
      if (!response)
        return res.status(404).json({ status:404, message: " Pedido não encontrado " });
      return res.status(200).json(response);
    } catch (e) {
      return next(e);
    }
  }
  async addPedido(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.PedidoServices.addPedido(req.body);
      if (!response)
        return res.status(400).json({ message: " Erro Generico na Operação " });
      return res.status(200).json(response);
    } catch (e) {
      return next(e);
    }
  }

  async deletePedido(req: Request, res: Response, next: NextFunction) {
    try {
      const Pedido = Number(req.params.idPedido);
      if (isNaN(Pedido))
        return res.status(400).json({ message: " Erro Generico na Operação " }); //Caberia uma chamada no banco para trazer mensagens dinamica do mesmo.
      const response = await this.PedidoServices.deletePedido(Pedido);
      return res.status(response.status).json({status:200, message: "Excluido com sucesso"});
    } catch (e) {
      return next(e);
    }
  }
}
