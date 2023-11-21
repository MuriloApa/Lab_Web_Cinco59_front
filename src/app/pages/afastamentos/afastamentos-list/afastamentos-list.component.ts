import { FormBuilder, FormGroup } from '@angular/forms';
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
  Subject,
  Subscription,
  catchError,
  debounceTime,
  distinct,
  distinctUntilChanged,
  map,
  merge,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Afastamento } from 'src/app/models/afastamento.model';
import { AfastamentosService } from '../afastamentos.service';
import { AfastamentosDeleteComponent } from '../afastamentos-delete/afastamentos-delete.component';

@Component({
  selector: 'app-afastamentos-list',
  templateUrl: './afastamentos-list.component.html',
  styleUrls: ['./afastamentos-list.component.scss']
})
export class AfastamentosListComponent implements OnInit, AfterViewInit, OnDestroy{

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoadingResults: boolean = true;
  data: Afastamento[] = [];
  resultsLegth: number = 0;
  subscriptions: Subscription[] = [];
  displayedColumns: string[] = [
    'id',
    'servidor',
    'indisponibilidade',
    'dataInicio',
    'duracao',
    'exercicio',
    'actions',
  ];
  form!: FormGroup;
  refresh: Subject<boolean> = new Subject();

  constructor(
    private readonly router: Router,
    private readonly service: AfastamentosService,
    private readonly fb: FormBuilder,
    private readonly dialog: MatDialog
  ) {}

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
          return this.service
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



  openDeleteDialogo(afastamento: Afastamento): void {
    const dialogRef = this.dialog.open(AfastamentosDeleteComponent, {
      data: afastamento,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(afastamento.id)
        this.service.delete(afastamento.id).subscribe(() => {
          this.paginator.firstPage();
          this.refresh.next(true);
          this.service.showMessage(
            'Afastamento excluído com sucesso!'
          );
        })
      }
    })
  }

  navigateToAfastamentosCreate(): void{
    this.router.navigate(['/afastamentos/create']);
  }
}
