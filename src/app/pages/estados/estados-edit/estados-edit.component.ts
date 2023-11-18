import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/models/estado.model';
import { Pais } from 'src/app/models/pais.model';
import { PaisService } from '../../pais/pais.service';
import { EstadosService } from '../estados.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-estados-edit',
  templateUrl: './estados-edit.component.html',
  styleUrls: ['./estados-edit.component.scss']
})
export class EstadosEditComponent implements OnInit{

  id!: number;
  paises: Pais[] = [];
  form: FormGroup = new FormGroup({});
  estado!: Estado;

  constructor(
    private readonly router: Router,
    private readonly paisesService: PaisService,
    private readonly estadosService: EstadosService,
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.paisesService.listCampo().subscribe((resp) => {
      this.paises = resp;
      this.paises.sort((a: Pais, b: Pais) =>
        a.sigla.localeCompare(b.sigla)
      );
    });

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      pais: [null, [Validators.required]],
      sigla: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      regiao: [null, [Validators.required]],
    });

    this.estadosService.findById(this.id).subscribe(resp => {
      this.estado = resp
      this.form.patchValue(this.estado)
    })
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const estado: Estado = this.form.value;
      this.estadosService
        .update(this.id, estado)
        .pipe(
          catchError((err) => {
            this.estadosService.showMessage(
              'Estado não pode ser atualizado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.estadosService.showMessage(
            'Estado atualizado com sucesso!'
          );
          this.router.navigate(['/estados']);
        });
    } else {
      this.estadosService.showMessage(
        'Existem campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/estados']);
  }

  compareCountry(o1: Estado, o2: Estado): boolean {
    return o1?.id === o2?.id;
  }
}
