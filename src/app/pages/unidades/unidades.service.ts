import { Injectable } from '@angular/core';
import { Unidade } from 'src/app/models/unidade.model';
import { GenericService } from 'src/app/shared/Generic.service';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService extends GenericService<Unidade> {

  override baseApi: string = '/unidade';
}
