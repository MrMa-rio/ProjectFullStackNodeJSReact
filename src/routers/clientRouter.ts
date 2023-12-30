import express, { NextFunction, Request, Response } from "express";
import { ClientController } from "../controllers";
const router = express.Router();
const Cliente = new ClientController();
// router.get('/:id', clientController.getClient);

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    Cliente.getClients(req, res, next); //fazendo testes direto
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

router.get("/:idCliente", async (req: Request, res: Response, next: NextFunction) => {
    try {
      Cliente.getClient(req, res, next); //fazendo testes direto
    } catch (error) {
      console.error("Erro na consulta ao banco de dados:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
);

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    Cliente.addClient(req, res, next);
  } catch (error) {
    next(error)
  }
});

router.patch("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    Cliente.updateClient(req, res, next);
  } catch (error) {
    next(error)
  }
});

// router.post('/', clientController.postClient);

// router.patch('/:id', clientController.patchClient);

// router.delete('/:id', clientController.deleteClient);

export default router;
