import { Cargo } from "./cargo.model";
import { Genero } from "./genero.model";
import { Unidade } from "./unidade.model";

export interface PessoaFisica {
  id: number;
  cpf: string;
  nome: string;
  dataNascimento: Date;
  sexo: string;
  genero: Genero;
  tipoSanguineo: string;
  cargo: Cargo;
  unidade: Unidade;
  dateCreated: Date;
  lastUpdate: Date;
}
