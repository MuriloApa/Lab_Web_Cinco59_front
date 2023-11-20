import { TipoClasse } from "../shared/enums/tipoClasse.enum";
import { Email } from "./email.model";
import { Endereco } from "./endereco.model";
import { PessoaFisica } from "./pessoaFisica.model";
import { Telefone } from "./telefone.model";
import { Terceirizado } from "./terceirizado.model";

export interface Servidor extends PessoaFisica{
  siape: number;
  matricula: number;
  dataPosse: Date;
  classe: TipoClasse;
  nomeDeGuerra: string;
  ativo: boolean | string;
  chefe: Servidor;
  servidoresSubordinados: Servidor[];
  terceirizadosSubordinados: Terceirizado[];
  telefones?: Telefone[];
  enderecos?: Endereco[];
  emails?: Email[];
}
