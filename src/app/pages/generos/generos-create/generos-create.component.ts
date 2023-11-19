import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { regexValidator } from 'src/app/shared/validators/regex.validator';
import { GenerosService } from '../generos.service';
import { Genero } from 'src/app/models/genero.model';

@Component({
  selector: 'app-generos-create',
  templateUrl: './generos-create.component.html',
  styleUrls: ['./generos-create.component.scss']
})
export class GenerosCreateComponent implements OnInit{

  unidades!: number[];
  form: FormGroup = new FormGroup({});

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly service: GenerosService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
    })
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const genero: Genero = this.form.value;
      this.service
        .create(genero)
        .pipe(
          catchError((err) => {
            this.service.showMessage(
              'Gênero não pode ser cadastrado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.service.showMessage(
            'Gênero cadastrado com sucesso!'
          );
          this.router.navigate(['/generos']);
        });
    } else {
      this.service.showMessage(
        'Existem campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void{
    this.router.navigate(['/generos'])
  }
}
