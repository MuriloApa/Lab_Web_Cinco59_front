import { Email } from "./email.model";
import { Endereco } from "./endereco.model";
import { Telefone } from "./telefone.model";

export interface Unidade {
  id: number;
  nome: string;
  sigla: string;
  formal: boolean | string,
  unidadeSuperiorImediata?: Unidade,
  ordenacaoForcada: number,
  telefones: Telefone[],
  endereco: Endereco,
  emails: Email[],
  dateCreated: Date;
  lastUpdate: Date;
}
