import { Indisponibilidade } from './../../../models/indisponibilidade.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { IndisponibilidadesService } from '../indisponibilidades.service';

@Component({
  selector: 'app-indisponibilidades-create',
  templateUrl: './indisponibilidades-create.component.html',
  styleUrls: ['./indisponibilidades-create.component.scss']
})
export class IndisponibilidadesCreateComponent implements OnInit{

  form: FormGroup = new FormGroup({});

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly service: IndisponibilidadesService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
    })

  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const indisponibilidade: Indisponibilidade = this.form.value;
      this.service
        .create(indisponibilidade)
        .pipe(
          catchError((err) => {
            this.service.showMessage(
              'Indisponibilidade não pode ser cadastrada!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.service.showMessage(
            'Indisponibilidade cadastrada com sucesso!'
          );
          this.router.navigate(['/indisponibilidades']);
        });
    } else {
      this.service.showMessage(
        'Existem campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/indisponibilidades']);
  }

}
