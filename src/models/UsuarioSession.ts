import { UsuarioSessionProps } from "../interfaces";

export default class Usuario {
  nome: string;
  data_nascimento: string;
  imagem_64: string;
  dateEmissao: string;
  dateExpire: string;
  dateMilisseconds: number;

  constructor(usuario: UsuarioSessionProps) {
    this.nome = usuario.nome;
    this.data_nascimento = usuario.data_nascimento;
    this.imagem_64 = usuario.imagem_64;
    this.dateEmissao = usuario.dateEmissao;
    this.dateExpire = usuario.dateExpire;
    this.dateMilisseconds = usuario.dateMilisseconds
  }

  get object(): UsuarioSessionProps {
    return {
      nome: this.nome,
      data_nascimento: this.data_nascimento,
      imagem_64: this.imagem_64,
      dateEmissao: this.dateEmissao,
      dateExpire: this.dateExpire,
      dateMilisseconds: this.dateMilisseconds
    };
  }
}
