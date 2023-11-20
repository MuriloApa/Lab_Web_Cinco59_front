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
import { Servidor } from 'src/app/models/servidor.model';
import { ServidoresService } from '../servidores.service';
import { MatDialog } from '@angular/material/dialog';
import { ServidoresDeleteComponent } from '../servidores-delete/servidores-delete.component';

@Component({
  selector: 'app-servidores-list',
  templateUrl: './servidores-list.component.html',
  styleUrls: ['./servidores-list.component.scss']
})
export class ServidoresListComponent implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoadingResults: boolean = true;
  data: Servidor[] = [];
  resultsLegth: number = 0;
  subscriptions: Subscription[] = [];
  displayedColumns: string[] = [
    'id',
    'nome',
    'cargo',
    'unidade',
    'classe',
    'nomeDeGuerra',
    'ativo',
    'actions',
  ];
  form!: FormGroup;
  refresh: Subject<boolean> = new Subject();

  constructor(
    private readonly router: Router,
    private readonly service: ServidoresService,
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

  openDeleteDialogo(servidor: Servidor): void {
    const dialogRef = this.dialog.open(ServidoresDeleteComponent, {
      data: servidor,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.delete(servidor.id).subscribe(() => {
          this.paginator.firstPage();
          this.refresh.next(true);
          this.service.showMessage(
            'Servidor excluído com sucesso!'
          );
        })
      }
    })
  }

  navigateToServidoresCreate(): void{
    this.router.navigate(['/servidores/create']);
  }

  exibeAtivo(ativo: boolean){
    return ativo ? 'Sim' : 'Não' ;
  }
}
