import { ItemProps } from "src/interfaces/ItemProps/ItemProps";


export default class Item {
  idItem: number;
  nome: string;
  preco_unitario: number;

  constructor(item: ItemProps) {
    this.idItem = item.idItem;
    this.nome = item.nome;
    this.preco_unitario = item.preco_unitario;
  }

  get object(): ItemProps {
    return {
      idItem: this.idItem,
      nome: this.nome,
      preco_unitario: this.preco_unitario,
    };
  }
}
