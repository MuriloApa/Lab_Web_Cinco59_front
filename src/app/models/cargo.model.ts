export interface Cargo {
  id: number;
  nome: string;
  sigla: string;
  ordenacaoForcada: number;
  ativo: boolean | string;
  dateCreated: Date;
  lastUpdate: Date;
}
