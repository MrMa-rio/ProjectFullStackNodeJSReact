import { UsuarioProps } from "../interfaces";

export default class Usuario {
  idUsuario: number;
  nome: string;
  cpf: string;
  imagem_64: string;
  senha: string;
  data_nascimento: string;
  nivel_acesso: number;

  constructor(usuario: UsuarioProps) {
    this.idUsuario = usuario.idUsuario;
    this.nome = usuario.nome;
    this.cpf = usuario.cpf;
    this.imagem_64 = usuario.imagem_64;
    this.senha = usuario.senha;
    this.data_nascimento = usuario.data_nascimento;
    this.nivel_acesso = usuario.nivel_acesso;
  }

  get object(): UsuarioProps {
    return {
      idUsuario: this.idUsuario,
      nome: this.nome,
      cpf: this.cpf,
      imagem_64: this.imagem_64,
      senha: this.senha,
      data_nascimento: this.data_nascimento,
      nivel_acesso: this.nivel_acesso
    };
  }
}
