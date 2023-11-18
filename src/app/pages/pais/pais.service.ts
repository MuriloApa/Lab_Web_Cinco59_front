import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map } from 'rxjs';
import { Pais } from 'src/app/models/pais.model';
import { ResponseDataList } from 'src/app/models/shared';
import { GenericService } from 'src/app/shared/Generic.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisService extends GenericService<Pais> {

  override baseApi: string = '/pais';
}
