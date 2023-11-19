export interface Funcao {
  id: number;
  nome: string;
  sigla: string;
  exclusiva: boolean | string;
  ordenacaoForcada: number;
  ativa: boolean | string;
  telefone: any;
  dateCreated: Date;
  lastUpdate: Date;
}
