import express, { NextFunction, Request, Response } from "express";
import { AuthController, ItemController } from "../controllers";
const router = express.Router();
const itemController = new ItemController();
const authController = new AuthController()

router.post(
  "/",
  authController.verificaToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      itemController.addItem(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/:idItem",authController.verificaToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    itemController.getItem(req, res, next);
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

router.get("/",authController.verificaToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    itemController.getItems(req, res, next);
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

router.delete("/:idItem",authController.verificaToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    itemController.deleteItem(req, res, next);
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});
export default router