import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Municipio } from 'src/app/models/municipio.model';
import { ResponseDataList } from 'src/app/models/shared';
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
    return this.http.post<Municipio>(
      environment.baseUrl + this.baseApi,
      municipio
    );
  }

  findById(id: number): Observable<Municipio> {
    return this.http.get<Municipio>(
      environment.baseUrl + this.baseApi + `/${id}`
    );
  }

  update(id: number, municipio: Municipio): Observable<Municipio> {
    return this.http.patch<Municipio>(
      environment.baseUrl + this.baseApi + `/${id}`,
      municipio
    );
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(
      environment.baseUrl + this.baseApi + `/${id}`
    );
  }

  list(
    page: number,
    limit: number,
    search?: string
  ): Observable<ResponseDataList<Municipio>> {
    let params = new HttpParams().set('page', page).set('limit', limit);
    if (search?.trim()) {
      params = params.set('search', search.trim());
    }
    return this.http.get<ResponseDataList<Municipio>>(
      environment.baseUrl + this.baseApi,
      { params }
    );
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
