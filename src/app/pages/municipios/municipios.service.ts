import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Municipio } from 'src/app/models/municipio.model';
import { ResponseDataList } from 'src/app/models/shared';
import { GenericService } from 'src/app/shared/Generic.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MunicipiosService extends GenericService<Municipio> {
  override baseApi: string = '/municipio';
  
}
