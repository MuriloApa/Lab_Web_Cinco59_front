import { PessoaFisica } from "./pessoaFisica.model";
import { Servidor } from "./servidor.model";
import { Terceirizado } from "./terceirizado.model";
import { Unidade } from "./unidade.model";

export interface Email {
  endereco: string;
  usuarios_unidade?: PessoaFisica[];
  tipo: string;
  proprietarioTerceirizado?: Terceirizado;
  proprietarioServidor?: Servidor;
  unidade: Unidade;
}
