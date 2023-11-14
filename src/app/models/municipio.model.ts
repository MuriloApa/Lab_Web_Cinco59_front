import { Estado } from "./estado.model";

export interface Municipio {
  id: number;
  nome: string;
  sigla: string;
  ddd: string;
  estado: Estado;
  dateCreated: Date;
  lastUpdate: Date;
}
