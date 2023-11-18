import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaisService } from '../pais.service';
import { Pais } from 'src/app/models/pais.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-paises-create',
  templateUrl: './paises-create.component.html',
  styleUrls: ['./paises-create.component.scss'],
})
export class PaisesCreateComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly paisesService: PaisService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      sigla: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      ddi: [null, [Validators.required, Validators.minLength(2)]]
    })

  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const pais: Pais = this.form.value;
      this.paisesService
        .create(pais)
        .pipe(
          catchError((err) => {
            this.paisesService.showMessage(
              'País não pode ser cadastrado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.paisesService.showMessage(
            'País cadastrado com sucesso!'
          );
          this.router.navigate(['/paises']);
        });
    } else {
      this.paisesService.showMessage(
        'Existem campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/paises']);
  }
}
