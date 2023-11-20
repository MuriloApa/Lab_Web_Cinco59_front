import { Injectable } from '@angular/core';
import { Servidor } from 'src/app/models/servidor.model';
import { GenericService } from 'src/app/shared/Generic.service';

@Injectable({
  providedIn: 'root'
})
export class ServidoresService extends GenericService<Servidor> {

  override baseApi: string = '/servidor';
}
