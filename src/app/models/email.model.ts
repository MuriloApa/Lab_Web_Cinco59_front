import { PessoaFisica } from "./pessoaFisica.model";
import { Servidor } from "./servidor.model";
import { Terceirizado } from "./terceirizado.model";
import { Unidade } from "./unidade.model";

export interface Email {
  id: number;
  endereco: string;
  usuarios_unidade?: PessoaFisica[];
  tipo: string;
  proprietarioTerceirizado?: Terceirizado;
  proprietarioServidor?: Servidor;
  unidade: Unidade;
  dateCreated: Date;
  lastUpdate: Date;
}
