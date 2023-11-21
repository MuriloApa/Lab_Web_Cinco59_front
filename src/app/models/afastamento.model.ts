import { Indisponibilidade } from "./indisponibilidade.model";
import { Servidor } from "./servidor.model";

export interface Afastamento {
  id: number;
  servidor: Servidor;
  indisponibilidade: Indisponibilidade;
  dataInicio: Date;
  duracao: number;
  exercicio: number;
  dateCreated: Date;
  lastUpdate: Date;
}
