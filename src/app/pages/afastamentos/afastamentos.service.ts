import { Injectable } from '@angular/core';
import { Afastamento } from 'src/app/models/afastamento.model';
import { GenericService } from 'src/app/shared/Generic.service';

@Injectable({
  providedIn: 'root'
})
export class AfastamentosService extends GenericService<Afastamento>{

  override baseApi: string = '/afastamentos';
}
