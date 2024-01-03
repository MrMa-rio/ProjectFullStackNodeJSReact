import express, { NextFunction, Request, Response } from "express";
import { ClientController,AuthController } from "../controllers";
const router = express.Router();
const clientController = new ClientController();
const authController = new AuthController()

router.get("/", authController.verificaTokenUsuario  ,async (req: Request, res: Response, next: NextFunction) => {
  try {
    clientController.getClients(req, res, next); 
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

router.get("/:idCliente",authController.verificaTokenUsuario, async (req: Request, res: Response, next: NextFunction) => {
    try {
      clientController.getClient(req, res, next); 
    } catch (error) {
      console.error("Erro na consulta ao banco de dados:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
);

router.post("/",authController.verificaTokenUsuario, async (req: Request, res: Response, next: NextFunction) => {
  try {
    clientController.addClient(req, res, next);
  } catch (error) {
    next(error)
  }
});

router.patch("/",authController.verificaTokenUsuario, async (req: Request, res: Response, next: NextFunction) => {
  try {
    clientController.updateClient(req, res, next);
  } catch (error) {
    next(error)
  }
});

export default router;
