import { UsuarioSessionProps } from "../UsuarioSessionProps/UsuarioSessionProps";

export interface EncodeResult {
    token: string,
    expires: number,
    issued: number
}

export type DecodeResult =
    | {
          type: "valid";
          session: UsuarioSessionProps;
      }
    | {
          type: "integrity-error";
      }
    | {
          type: "invalid-token";
      };

export type ExpirationStatus = "expired" | "active" | "grace";