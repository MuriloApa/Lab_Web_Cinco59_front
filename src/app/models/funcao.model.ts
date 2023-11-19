export interface Funcao {
  id: number;
  nome: string;
  sigla: string;
  exclusiva: boolean | string;
  ordenacaoForcada: number;
  ativo: boolean | string;
  telefone: any;
  dateCreated: Date;
  lastUpdate: Date;
}
