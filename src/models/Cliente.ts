import { ClienteProps } from "../interfaces";

export default class Cliente {
  idCliente: number;
  nome: string;
  cpf: string;
  imagem_64: string;
  senha: string;
  data_nascimento: string;
  nivel_acesso: number;
  email: string;

  constructor(cliente: ClienteProps) {
    this.idCliente = cliente.idCliente;
    this.nome = cliente.nome;
    this.cpf = cliente.cpf;
    this.imagem_64 = cliente.imagem_64;
    this.senha = cliente.senha;
    this.data_nascimento = cliente.data_nascimento;
    this.nivel_acesso = cliente.nivel_acesso;
    this.email = cliente.email;
  }

  get object(): ClienteProps {
    return {
      idCliente: this.idCliente,
      nome: this.nome,
      cpf: this.cpf,
      imagem_64: this.imagem_64,
      senha: this.senha,
      data_nascimento: this.data_nascimento,
      nivel_acesso: this.nivel_acesso,
      email: this.email,
    };
  }
}
