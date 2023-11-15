import { FormBuilder, FormGroup } from '@angular/forms';
import { MunicipiosService } from './../municipios.service';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import {
  Subscription,
  catchError,
  map,
  merge,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { Municipio } from 'src/app/models/municipio.model';

@Component({
  selector: 'app-municipios-list',
  templateUrl: './municipios-list.component.html',
  styleUrls: ['./municipios-list.component.scss'],
})
export class MunicipiosListComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoadingResults: boolean = true;
  data: Municipio[] = [];
  resultsLegth: number = 0;
  subscriptions: Subscription[] = [];
  displayedColumns: string[] = [
    'id',
    'nome',
    'sigla',
    'ddd',
    'estado',
    'actions',
  ];
  form!: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly municipiosService: MunicipiosService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: [],
    })
  }

  ngAfterViewInit(): void {
    const sub = merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.municipiosService
            .list(this.paginator.pageIndex + 1, this.paginator.pageSize)
            .pipe(catchError(() => of(null)));
        }),
        map((data) => {
          this.isLoadingResults = false;
          if (data) {
            this.resultsLegth = data.meta.totalItems;
            return data.items;
          }
          return [];
        })
      )
      .subscribe((data) => {
        this.data = data;
      });
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  navigateToCargosCreate(): void {
    this.router.navigate(['/municipios/create']);
  }
}
