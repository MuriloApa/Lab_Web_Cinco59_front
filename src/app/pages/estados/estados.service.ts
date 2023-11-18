import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from './../../../environments/environment'
import { Observable, map } from 'rxjs';
import { Estado } from 'src/app/models/estado.model';
import { ResponseDataList } from 'src/app/models/shared';
import { GenericService } from 'src/app/shared/Generic.service';

@Injectable({
  providedIn: 'root'
})
export class EstadosService extends GenericService<Estado> {

  override baseApi: string = '/estado';

  listCampo(): Observable<Estado[]>{
    const params = new HttpParams().set('limit', '99');
    return this.http.get<ResponseDataList<Estado>>(environment.baseUrl + this.baseApi, {params}).pipe(map((resp) => resp.items))
  }
}
