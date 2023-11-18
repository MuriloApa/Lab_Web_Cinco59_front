import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CargosService } from '../cargos.service';
import { Cargo } from 'src/app/models/cargo.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-cargos-create',
  templateUrl: './cargos-create.component.html',
  styleUrls: ['./cargos-create.component.scss'],
})
export class CargosCreateComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly cargosService: CargosService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      sigla: [null, [Validators.required, Validators.minLength(2), this.siglaValidator(/^[A-Z]+$/)]],
      ordenacaoForcada: [null, [Validators.required]],
      ativo: [true, [Validators.required]],
    });
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const cargo: Cargo = this.form.value;
      cargo.ativo = cargo.ativo === 'true';
      console.log(cargo);
      this.cargosService
        .create(cargo)
        .pipe(
          catchError((err) => {
            this.cargosService.showMessage(
              'Cargo não pode ser cadastrado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.cargosService.showMessage('Cargo cadastrado com sucesso!');
          this.router.navigate(['/cargos']);
        });
    } else {
      this.cargosService.showMessage(
        'Existem campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/cargos']);
  }


  /* Função baseada no exemplo disponibilizado na documentação do Angular para validações customizáveis */
  siglaValidator(expression: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = expression.test(control.value);
      return forbidden ?  null : { forbiddenName: { value: control.value } };
    };
  }
}
