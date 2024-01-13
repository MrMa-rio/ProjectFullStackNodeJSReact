import express, { NextFunction, Request, Response } from "express";
import { ClienteController, AuthController } from "../controllers";
const router = express.Router();
const clientController = new ClienteController();
const authController = new AuthController();

router.get(
  "/",
  authController.verificaToken,
  authController.verificaAcesso,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      clientController.getClientes(req, res, next);
    } catch (error) {
      console.error("Erro na consulta ao banco de dados:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
);

router.get("/:idCliente", authController.verificaToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      clientController.getCliente(req, res, next);
    } catch (error) {
      console.error("Erro na consulta ao banco de dados:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
);

router.get("/:idCliente/pedidos", authController.verificaToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      clientController.getPedidoCliente(req, res, next);
    } catch (error) {
      console.error("Erro na consulta ao banco de dados:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
);

router.get("/:idCliente/pedidos/:idPedido", authController.verificaToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      clientController.getPedidoCliente(req, res, next);
    } catch (error) {
      console.error("Erro na consulta ao banco de dados:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
);


router.post(
  "/",
  authController.verificaToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      clientController.addCliente(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/",
  authController.verificaToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      clientController.updateCliente(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
