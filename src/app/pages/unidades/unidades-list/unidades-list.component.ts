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
import { Unidade } from 'src/app/models/unidade.model';
import { UnidadesService } from '../unidades.service';
import { UnidadesDeleteComponent } from '../unidades-delete/unidades-delete.component';

@Component({
  selector: 'app-unidades-list',
  templateUrl: './unidades-list.component.html',
  styleUrls: ['./unidades-list.component.scss']
})
export class UnidadesListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoadingResults: boolean = true;
  data: Unidade[] = [];
  resultsLegth: number = 0;
  subscriptions: Subscription[] = [];
  displayedColumns: string[] = [
    'id',
    'nome',
    'sigla',
    'formal',
    'unidadeSuperiorImediata',
    'ordenacaoForcada',
    'actions',
  ];
  form!: FormGroup;
  refresh: Subject<boolean> = new Subject();

  constructor(
    private readonly router: Router,
    private readonly service: UnidadesService,
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

  openDeleteDialogo(unidade: Unidade): void {
    const dialogRef = this.dialog.open(UnidadesDeleteComponent, {
      data: unidade,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.delete(unidade.id).subscribe(() => {
          this.paginator.firstPage();
          this.refresh.next(true);
          this.service.showMessage(
            'Unidade excluída com sucesso!'
          );
        })
      }
    })
  }

  navigateToServidoresCreate(): void{
    this.router.navigate(['/unidades/create']);
  }

  exibeAtivo(ativo: boolean): string{
    return ativo ? 'Sim' : 'Não' ;
  }

  exibeUnidadeSuperior(unidade: Unidade): string{
    if (unidade === undefined || unidade === null) {
      return 'Não há'
    }
    return unidade.sigla;
  }

  navigateToUnidadesCreate(): void{
    this.router.navigate(['/unidades/create']);
  }

}
