import { Injectable } from '@angular/core';
import { Terceirizado } from 'src/app/models/terceirizado.model';
import { GenericService } from 'src/app/shared/Generic.service';

@Injectable({
  providedIn: 'root'
})
export class TerceirizadosService extends GenericService<Terceirizado>{

  override baseApi: string = '/terceirizado';
}
