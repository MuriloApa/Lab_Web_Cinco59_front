import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Subject, Subscription, catchError, debounceTime, distinctUntilChanged, of, startWith, switchMap, map, merge } from 'rxjs';
import { Estado } from 'src/app/models/estado.model';
import { EstadosService } from '../estados.service';
import { MatDialog } from '@angular/material/dialog';
import { EstadosDeleteComponent } from '../estados-delete/estados-delete.component';

@Component({
  selector: 'app-estados-list',
  templateUrl: './estados-list.component.html',
  styleUrls: ['./estados-list.component.scss']
})
export class EstadosListComponent implements OnInit, AfterViewInit, OnDestroy{

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoadingResults: boolean = true;
  data: Estado[] = [];
  resultsLegth: number = 0;
  subscriptions: Subscription[] = [];
  displayedColumns: string[] = [
    'id',
    'nome',
    'sigla',
    'pais',
    'regiao',
    'actions',
  ];
  form!: FormGroup;
  refresh: Subject<boolean> = new Subject();

  constructor(private readonly router: Router,
    private readonly estadosService: EstadosService,
    private readonly fb: FormBuilder,
    private readonly dialog: MatDialog){}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: [],
    });

    const sub = this.form
      .get('search')!
      .valueChanges.pipe(distinctUntilChanged(), debounceTime(150))
      .subscribe(() => {
        this.paginator.firstPage();
        this.refresh.next(true);
      });

    this.subscriptions.push(sub);
  }

  ngAfterViewInit(): void {
    const sub = merge(this.refresh, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          const search = this.form.get('search')?.value;
          return this.estadosService
            .list(this.paginator.pageIndex + 1, this.paginator.pageSize, search)
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

  navigateToEstadosCreate(): void{
    this.router.navigate(['/estados/create']);
  }

  openDeleteDialogo(estado: Estado): void {
    const dialogRef = this.dialog.open(EstadosDeleteComponent, {
      data: estado,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.estadosService.delete(estado.id).subscribe(() => {
          this.paginator.firstPage();
          this.refresh.next(true);
          this.estadosService.showMessage(
            'Estado excluído com sucesso!'
          );
        })
      }
    })
  }
}
