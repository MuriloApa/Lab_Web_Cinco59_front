import { Injectable } from '@angular/core';
import { Funcao } from 'src/app/models/funcao.model';
import { GenericService } from 'src/app/shared/Generic.service';

@Injectable({
  providedIn: 'root'
})
export class FuncoesService extends GenericService<Funcao> {
  override baseApi: string = '/funcao';
}
