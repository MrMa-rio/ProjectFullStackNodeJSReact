import express, { NextFunction, Request, Response } from "express";
import { OrderController,AuthController } from "../controllers";
const router = express.Router();
const orderController = new OrderController();
const authController = new AuthController()

router.get("/",authController.verificaToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    orderController.getOrders(req, res, next); 
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

router.get("/:idPedido",authController.verificaToken, async (req: Request, res: Response, next: NextFunction) => {
    try {
      orderController.getOrder(req, res, next); 
    } catch (error) {
      console.error("Erro na consulta ao banco de dados:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
);

router.post("/",authController.verificaToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    orderController.addOrder(req, res, next);
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});
router.delete("/:idPedido",authController.verificaToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    orderController.deleteOrder(req, res, next);
    res.status(200).status(200).json({status:200, message:"Deletado com sucesso"});
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});
export default router;
