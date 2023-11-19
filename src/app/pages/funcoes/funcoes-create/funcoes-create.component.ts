import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { FuncoesService } from '../funcoes.service';
import { Funcao } from 'src/app/models/funcao.model';
import { TipoTelefone } from 'src/app/shared/enums/tipoTelefone.enum';
import { regexValidator } from 'src/app/shared/validators/regex.validator';

@Component({
  selector: 'app-funcoes-create',
  templateUrl: './funcoes-create.component.html',
  styleUrls: ['./funcoes-create.component.scss']
})
export class FuncoesCreateComponent implements OnInit{

  unidades!: number[];
  form: FormGroup = new FormGroup({});

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly service: FuncoesService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      sigla: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3), regexValidator(/^[A-Z]+$/)]],
      exclusiva: ['false', [Validators.required]],
      ordenacaoForcada: [null, [Validators.required]],
      ativa: ['true', [Validators.required]],
      telefone: this.fb.group({
        numero: [null, [Validators.required, regexValidator(/^\d{8,11}$/)]],
        tipo: [TipoTelefone.FUNCIONAL, [Validators.required]],
        unidade: [null]
      })
    })
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const funcao: Funcao = this.form.value;
      funcao.exclusiva = funcao.exclusiva === 'true';
      funcao.ativa = funcao.ativa === 'true';
      console.log(funcao)
      this.service
        .create(funcao)
        .pipe(
          catchError((err) => {
            this.service.showMessage(
              'Função não pode ser cadastrado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.service.showMessage(
            'Função cadastrado com sucesso!'
          );
          this.router.navigate(['/funcoes']);
        });
    } else {
      this.service.showMessage(
        'Existem campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void{
    this.router.navigate(['/funcoes'])
  }
}
