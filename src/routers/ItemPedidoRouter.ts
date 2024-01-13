import express, { NextFunction, Request, Response } from "express";
import { ItemPedidoController,AuthController } from "../controllers";
const router = express.Router();
const itemPedidoController = new ItemPedidoController();
const authController = new AuthController()

router.post("/",authController.verificaToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    itemPedidoController.addItemsPedido(req, res, next);
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

router.get("/:fkPedido",authController.verificaToken, async (req: Request, res: Response, next: NextFunction) => {
    try {
      itemPedidoController.getItemsPedido(req, res, next); //fazendo testes direto
    } catch (error) {
      console.error("Erro na consulta ao banco de dados:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
);

export default router;
