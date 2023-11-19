import { Injectable } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';
import { GenericService } from 'src/app/shared/Generic.service';

@Injectable({
  providedIn: 'root'
})
export class GenerosService extends GenericService<Genero> {
  override baseApi: string = '/genero';
}
