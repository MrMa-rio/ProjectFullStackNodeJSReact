import { UsuarioSessionProps } from "../UsuarioSessionProps/UsuarioSessionProps";

export type PartialSession = Omit<UsuarioSessionProps, "dataExpire" | "dataEmissao" | "dateMilisseconds">;