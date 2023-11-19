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
import { CargosService } from '../cargos.service';
import { Cargo } from 'src/app/models/cargo.model';
import { CargosDeleteComponent } from '../cargos-delete/cargos-delete.component';
import { exibeAtivo } from 'src/app/shared/functions/exibeAtivo';

@Component({
  selector: 'app-cargos-list',
  templateUrl: './cargos-list.component.html',
  styleUrls: ['./cargos-list.component.scss'],
})
export class CargosListComponent implements OnInit, AfterViewInit, OnDestroy{

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoadingResults: boolean = true;
  data: Cargo[] = [];
  resultsLegth: number = 0;
  subscriptions: Subscription[] = [];
  displayedColumns: string[] = [
    'id',
    'nome',
    'sigla',
    'ordenacaoForcada',
    'ativo',
    'actions',
  ];
  form!: FormGroup;
  refresh: Subject<boolean> = new Subject();

  constructor(
    private readonly router: Router,
    private readonly cargosService: CargosService,
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
          return this.cargosService
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

  navigateToCargosCreate(): void{
    this.router.navigate(['/cargos/create']);
  }

  openDeleteDialogo(cargo: Cargo): void {
    const dialogRef = this.dialog.open(CargosDeleteComponent, {
      data: cargo,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(cargo.id)
        this.cargosService.delete(cargo.id).subscribe(() => {
          this.paginator.firstPage();
          this.refresh.next(true);
          this.cargosService.showMessage(
            'Cargo excluído com sucesso!'
          );
        })
      }
    })
  }

  exibeAtivo(ativo: boolean){
    return ativo ? 'Sim' : 'Não' ;
  }  
}
