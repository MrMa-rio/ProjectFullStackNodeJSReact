import express, { NextFunction, Request, Response } from "express";
import { AuthController } from "../controllers/AuthController";
const router = express.Router();
const authController = new AuthController();
router.post(
  "/verify",
  async (req: Request, res: Response, next: NextFunction) => {
    await authController.verificaTokenUsuario(req, res, next);
  }
);
router.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    await authController.registraTokenUsuario(req, res, next);
  }
);
export default router;
