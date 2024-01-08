import { ItemProps } from "src/interfaces/ItemProps/ItemProps";

export default class Item {
  idItem: number;
  nome: string;
  preco_unitario: number;
  imagem_64: string;

  constructor(item: ItemProps) {
    this.idItem = item.idItem;
    this.nome = item.nome;
    this.preco_unitario = item.preco_unitario;
    this.imagem_64 = item.imagem_64;
  }

  get object(): ItemProps {
    return {
      idItem: this.idItem,
      nome: this.nome,
      preco_unitario: this.preco_unitario,
      imagem_64: this.imagem_64,
    };
  }
}
