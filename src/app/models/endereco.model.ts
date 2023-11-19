import { Municipio } from "./municipio.model";

export interface Endereco {
  id: number;
  CEP: string,
  logradouro: string,
  numero: number,
  bairro: string,
  observacao: string,
  municipio: Municipio;
  tipo: string,
  dateCreated: Date;
  lastUpdate: Date;
}
