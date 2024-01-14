import express, { NextFunction, Request, Response } from "express";
import { PedidoController,AuthController } from "../controllers";
const router = express.Router();
const pedidoController = new PedidoController();
const authController = new AuthController()

router.get("/",authController.verificaToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    pedidoController.getPedidos(req, res, next); 
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

router.get("/:idPedido",authController.verificaToken, async (req: Request, res: Response, next: NextFunction) => {
    try {
      pedidoController.getPedido(req, res, next); 
    } catch (error) {
      console.error("Erro na consulta ao banco de dados:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
);

router.post("/",authController.verificaToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    pedidoController.addPedido(req, res, next);
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

router.patch(
  "/",
  authController.verificaToken,
  // authController.verificaAcesso,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      pedidoController.updateStatusPedido(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:idPedido",authController.verificaToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    pedidoController.deletePedido(req, res, next);
    res.status(200).status(200).json({status:200, message:"Deletado com sucesso"});
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});
export default router;
