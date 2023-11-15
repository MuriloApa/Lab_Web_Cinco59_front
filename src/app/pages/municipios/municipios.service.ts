import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Municipio } from 'src/app/models/municipio.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MunicipiosService {
  baseApi: string = '/municipio';

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly http: HttpClient
  ) {}

  create(municipio: Municipio): Observable<Municipio> {
    return this.http.post<Municipio>(environment.baseUrl + this.baseApi, municipio);
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 50000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
}
