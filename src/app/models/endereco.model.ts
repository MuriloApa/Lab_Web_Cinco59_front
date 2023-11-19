import { Municipio } from "./municipio.model";

export interface Endereco {
  CEP: string,
  logradouro: string,
  numero: number,
  bairro: string,
  observacao: string,
  municipio: Municipio;
  tipo: string,
}
