import { Municipio } from './../../../models/municipio.model';
import { MunicipiosService } from './../municipios.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadosService } from '../../estados/estados.service';
import { Estado } from 'src/app/models/estado.model';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-municipios-create',
  templateUrl: './municipios-create.component.html',
  styleUrls: ['./municipios-create.component.scss'],
})
export class MunicipiosCreateComponent implements OnInit {
  estados: Estado[] = [];

  form: FormGroup = new FormGroup({});

  constructor(
    private readonly router: Router,
    private readonly municipiosService: MunicipiosService,
    private readonly estadosService: EstadosService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.estadosService.list().subscribe((resp) => {
      this.estados = resp;
      this.estados.sort((a: Estado, b: Estado) =>
        a.sigla.localeCompare(b.sigla)
      );
    });

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      estado: [null, [Validators.required]],
      sigla: [null, [ Validators.maxLength(3), Validators.minLength(3)]],
      ddd: [null, [ Validators.maxLength(2), Validators.minLength(2)]],
      regiao: [null, [Validators.minLength(3)]],
    });
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const municipio: Municipio = this.form.value;
      this.municipiosService
        .create(municipio)
        .pipe(
          catchError((err) => {
            this.municipiosService.showMessage(
              'Município não pode ser cadastrado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.municipiosService.showMessage(
            'Município cadastrado com sucesso!'
          );
          this.router.navigate(['/municipios']);
        });
    } else {
      this.municipiosService.showMessage(
        'Existem campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/municipios']);
  }
}
