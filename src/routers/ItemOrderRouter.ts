import express, { NextFunction, Request, Response } from "express";
import { ItemOrderController } from "../controllers";
const router = express.Router();
const itemOrderController = new ItemOrderController();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    itemOrderController.addItemsOrder(req, res, next);
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

router.get("/:fkPedido", async (req: Request, res: Response, next: NextFunction) => {
    try {
      itemOrderController.getItemsOrder(req, res, next); //fazendo testes direto
    } catch (error) {
      console.error("Erro na consulta ao banco de dados:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
);

export default router;
