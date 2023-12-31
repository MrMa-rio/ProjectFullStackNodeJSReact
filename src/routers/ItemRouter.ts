import express, { NextFunction, Request, Response } from "express";
import { ItemController } from "../controllers";
const router = express.Router();
const itemController = new ItemController();

router.get("/:idItem", async (req: Request, res: Response, next: NextFunction) => {
  try {
    itemController.getItem(req, res, next);
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    itemController.getItems(req, res, next);
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

export default router