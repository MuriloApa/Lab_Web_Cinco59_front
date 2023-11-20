import { PessoaFisica } from "./pessoaFisica.model";

export interface User {
  id: number;
  email: string;
  password: string;
  pessoaAssociada: PessoaFisica;
  dateCreated: Date;
  lastUpdate: Date;
  access_token?: string;
  token_type?: string;
}

export interface LoginData {
  access_token: string;
  token_type: string;
}
