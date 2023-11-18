import { Injectable } from '@angular/core';
import { Cargo } from 'src/app/models/cargo.model';
import { GenericService } from 'src/app/shared/Generic.service';

@Injectable({
  providedIn: 'root'
})
export class CargosService extends GenericService<Cargo>{
  override baseApi: string = '/cargo';
}
