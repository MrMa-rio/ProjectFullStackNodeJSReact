import { NextFunction, Request, Response } from "express";
import { sign } from "jsonwebtoken";
import UsuarioServices from "../services/UsuarioServices";

export class AuthController {
  usuarioServices: UsuarioServices;
  constructor() {
    this.usuarioServices = new UsuarioServices();
  }
  async registraTokenUsuario(req: Request, res: Response, next: NextFunction) {
    try {
      const { nome, senha } = req.body;
      const validaUsuario = await this.usuarioServices.CheckUsuario(nome, senha);
      if (validaUsuario) {
        if (validaUsuario.statusCode == 401) {
          return res
            .status(401)
            .json({ status: 401, message: "Falha na operacao" })
        }
        const token = sign({ nome: nome, senha: senha }, "Teste2024", {
          algorithm: "HS512",
          expiresIn: 240,
        });
        return res.json({ status: 200, token: token });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Falha na operacao" }).end();
    }
  }
}
