import { UsuarioProps } from "../interfaces";

export default class Usuario {
  idUsuario: number;
  nome: string;
  data_nascimento: string;
  imagem_64: string;
  senha: string;

  constructor(usuario: UsuarioProps) {
    this.idUsuario = usuario.idUsuario;
    this.nome = usuario.nome;
    this.senha = usuario.senha;
    this.data_nascimento = usuario.data_nascimento;
    this.imagem_64 = usuario.imagem_64;
  }

  get object(): UsuarioProps {
    return {
      idUsuario: this.idUsuario,
      nome: this.nome,
      senha: this.senha,
      data_nascimento: this.data_nascimento,
      imagem_64: this.imagem_64,
    };
  }
}
