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
  distinctUntilChanged,
  map,
  merge,
  of,
  startWith,
  switchMap,
} from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { Funcao } from 'src/app/models/funcao.model';
import { FuncoesService } from '../funcoes.service';
import { FuncoesDeleteComponent } from '../funcoes-delete/funcoes-delete.component';


@Component({
  selector: 'app-funcoes-list',
  templateUrl: './funcoes-list.component.html',
  styleUrls: ['./funcoes-list.component.scss']
})
export class FuncoesListComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoadingResults: boolean = true;
  data: Funcao[] = [];
  resultsLegth: number = 0;
  subscriptions: Subscription[] = [];
  displayedColumns: string[] = [
    'id',
    'nome',
    'sigla',
    'exclusiva',
    'ordenacaoForcada',
    'ativa',
    'telefone',
    'actions',
  ];
  form!: FormGroup;
  refresh: Subject<boolean> = new Subject();

  constructor(
    private readonly router: Router,
    private readonly service: FuncoesService,
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

  openDeleteDialogo(funcao: Funcao): void {
    const dialogRef = this.dialog.open(FuncoesDeleteComponent, {
      data: funcao,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.delete(funcao.id).subscribe(() => {
          this.paginator.firstPage();
          this.refresh.next(true);
          this.service.showMessage(
            'Função excluída com sucesso!'
          );
        })
      }
    })
  }

  navigateToFuncoesCreate(): void{
    this.router.navigate(['/funcoes/create']);
  }
}
