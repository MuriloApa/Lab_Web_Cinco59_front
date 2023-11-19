import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { FuncoesService } from '../funcoes.service';
import { Funcao } from 'src/app/models/funcao.model';
import { TipoTelefone } from 'src/app/shared/enums/tipoTelefone.enum';
import { regexValidator } from 'src/app/shared/validators/regex.validator';

@Component({
  selector: 'app-funcoes-edit',
  templateUrl: './funcoes-edit.component.html',
  styleUrls: ['./funcoes-edit.component.scss']
})
export class FuncoesEditComponent {

  id!: number;
  form: FormGroup = new FormGroup({});
  funcao!: Funcao;

  constructor(
    private readonly router: Router,
    private readonly service: FuncoesService,
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      sigla: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3), regexValidator(/^[A-Z]+$/)]],
      exclusiva: [null, [Validators.required]],
      ordenacaoForcada: [null, [Validators.required]],
      ativa: [null, [Validators.required]],
      telefone: this.fb.group({
        numero: [null, [Validators.required, regexValidator(/^\d{8,11}$/)]],
        tipo: [TipoTelefone.FUNCIONAL, [Validators.required]],
        unidade: [null]
      })
    })

    this.service.findById(this.id).subscribe(resp => {
      this.funcao = resp
      this.funcao.exclusiva = this.funcao.exclusiva? 'true' : 'false';
      this.funcao.ativa = this.funcao.ativa? 'true' : 'false';
      this.form.patchValue(this.funcao)
    })

    console.log(this.id)
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const funcao: Funcao = this.form.value;
      funcao.exclusiva = funcao.exclusiva === 'true';
      funcao.ativa = funcao.ativa === 'true';
      this.service
        .update(this.id, funcao)
        .pipe(
          catchError((err) => {
            this.service.showMessage(
              'Função não pode ser atualizada!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.service.showMessage(
            'Função atualizada com sucesso!'
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

  cancel(): void {
    this.router.navigate(['/funcoes']);
  }
}
