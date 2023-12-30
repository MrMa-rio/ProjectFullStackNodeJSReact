import express, { NextFunction, Request, Response } from "express";
import { OrderController } from "../controllers";
const router = express.Router();
const Order = new OrderController();
// router.get('/:id', clientController.getClient);

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    Order.getOrders(req, res, next); //fazendo testes direto
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

router.get("/:idPedido", async (req: Request, res: Response, next: NextFunction) => {
    try {
      Order.getOrder(req, res, next); //fazendo testes direto
    } catch (error) {
      console.error("Erro na consulta ao banco de dados:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
);

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    Order.addOrder(req, res, next);
  } catch (error) {
    next(error)
  }
});
export default router;
