import { Injectable } from '@angular/core';
import { Indisponibilidade } from 'src/app/models/indisponibilidade.model';
import { GenericService } from 'src/app/shared/Generic.service';

@Injectable({
  providedIn: 'root'
})
export class IndisponibilidadesService extends GenericService<Indisponibilidade>{
  override baseApi: string = '/indisponibilidades';
}
