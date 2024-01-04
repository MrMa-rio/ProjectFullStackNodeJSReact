import express, { NextFunction, Request, Response } from "express";
import { AuthController } from "../controllers/AuthController";
const router = express.Router();
const authController = new AuthController();
router.post(
  "/verify",
  async (req: Request, res: Response, next: NextFunction) => {
    await authController.verificaToken(req, res, next);
  }
);
router.post(
  "/usuario/register",
  async (req: Request, res: Response, next: NextFunction) => {
    await authController.registraTokenUsuario(req, res, next);
  }
);
router.post(
    "/cliente/register",
    async (req: Request, res: Response, next: NextFunction) => {
      await authController.registraTokenCliente(req, res, next);
    }
  );
export default router;
