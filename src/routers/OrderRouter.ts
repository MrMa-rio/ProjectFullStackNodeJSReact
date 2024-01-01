import express, { NextFunction, Request, Response } from "express";
import { OrderController } from "../controllers";
const router = express.Router();
const orderController = new OrderController();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    orderController.getOrders(req, res, next); 
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

router.get("/:idPedido", async (req: Request, res: Response, next: NextFunction) => {
    try {
      orderController.getOrder(req, res, next); 
    } catch (error) {
      console.error("Erro na consulta ao banco de dados:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
);

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    orderController.addOrder(req, res, next);
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});
router.delete("/:idPedido", async (req: Request, res: Response, next: NextFunction) => {
  try {
    orderController.deleteOrder(req, res, next);
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});
export default router;
