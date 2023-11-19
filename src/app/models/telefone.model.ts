import { TipoTelefone } from "../shared/enums/tipoTelefone.enum";

export interface Telefone {
  id: number;
  numero: string;
  tipo: TipoTelefone;
  unidade?: any;
  dateCreated: Date;
  lastUpdate: Date;
}
