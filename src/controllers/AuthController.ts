import { NextFunction, Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";
import { ClienteServices, UsuarioServices } from "../services";
import { StatusCodeCliente } from "../interfaces";
require("dotenv").config();

const secret_key = process.env.SECRET_KEY as string;

export class AuthController {
  usuarioServices: UsuarioServices;
  clienteServices: ClienteServices;

  constructor() {
    this.usuarioServices = new UsuarioServices();
    this.clienteServices = new ClienteServices();
  }
  async registraTokenUsuario(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, senha } = req.body;
      const validaUsuario = await this.usuarioServices.CheckUsuario(
        email,
        senha
      );
      if (validaUsuario) {
        if (validaUsuario.statusCode == 401) {
          return res
            .status(401)
            .json({ status: 401, message: "Login e/ou senha invalido" });
        }
        const token = sign(validaUsuario, secret_key, {
          algorithm: "HS512",
          expiresIn: 800*10,
        });
        return res.json({ status: 200, token: token });
      }
      else {
        return res
            .status(401)
            .json({ status: 401, message: "Login e/ou senha invalido" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Falha na operacao" }).end();
    }
  }
  async verificaToken(req: Request, res: Response, next: NextFunction) {
    try {
      let token = req.headers["authorization"];
     // console.log(token)
      if (!token)
        return res
          .status(401)
          .json({ status: 401, message: "Nenhum token informado!" })
          .end();
      try {
        const token_ = token.includes("Bearer") && token.substring(7, token.length) || token //Retira a assinatura Bearer do token
        const isValid = verify(token_, secret_key);
        // res.json({
        //   status: 200,
        //   message: "Validacao do token feita com sucesso.",
        //   payload: isValid,
        // });
        next();
      } catch (error) {
        return res
          .status(401)
          .json({ status: 401, message: "Token invalido!"})
          .end();
      }
    } catch (error) {
      return res
        .status(401)
        .json({ status: 401, message: "Falha na operacao." })
        .end();
    }
  }

  async verificaAcesso(req: Request, res: Response, next: NextFunction) {
    try {
      let token = req.headers["authorization"];
     // console.log(token)
      if (!token)
        return res
          .status(401)
          .json({ status: 401, message: "Nenhum token informado!" })
          .end();
      try {
        const token_ = token.includes("Bearer") && token.substring(7, token.length) || token //Retira a assinatura Bearer do token
        const isValid = verify(token_, secret_key) as StatusCodeCliente;
        if(isValid.nivel_acesso == 1) {
          return res
          .status(401)
          .json({ status: 401, message: "Sem acesso a essa rota!"})
          .end();
        }
        next();
      } catch (error) {
        return res
          .status(401)
          .json({ status: 401, message: "Token invalido!"})
          .end();
      }
    } catch (error) {
      return res
        .status(401)
        .json({ status: 401, message: "Falha na operacao." })
        .end();
    }
  }

  async registraTokenCliente(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, senha } = req.body;
      const validaCliente = await this.clienteServices.CheckCliente(
        email,
        senha
      );
      if (validaCliente) {
        if (validaCliente.statusCode == 401) {
          return res
            .status(401)
            .json({ status: 401, message: "Login e/ou senha invalido" });
        }
        const token = sign(validaCliente, secret_key, {
          algorithm: "HS512",
          expiresIn: 800,
        });
        return res.json({ status: 200, token: token });
      }
      else {
        return res
            .status(401)
            .json({ status: 401, message: "Login e/ou senha invalido" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Falha na operacao" }).end();
    }
  }
}
