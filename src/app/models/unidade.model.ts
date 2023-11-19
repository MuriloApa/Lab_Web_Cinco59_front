import { Endereco } from "./endereco.model";
import { Telefone } from "./telefone.model";

export interface Unidade {
  id: number;
  nome: string;
  sigla: string;
  formal: boolean,
  unidadeSuperiorImediata?: Unidade,
  ordenacaoForcada: number,
  telefones: Telefone[],
  endereco: Endereco,
  emails: any[],
  dateCreated: Date;
  lastUpdate: Date;
}
