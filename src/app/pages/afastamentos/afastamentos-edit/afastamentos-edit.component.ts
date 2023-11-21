import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';

import { Afastamento } from 'src/app/models/afastamento.model';
import { Indisponibilidade } from 'src/app/models/indisponibilidade.model';
import { Servidor } from 'src/app/models/servidor.model';
import { ServidoresService } from '../../servidores/servidores.service';
import { IndisponibilidadesService } from '../../indisponibilidades/indisponibilidades.service';
import { AfastamentosService } from '../afastamentos.service';

@Component({
  selector: 'app-afastamentos-edit',
  templateUrl: './afastamentos-edit.component.html',
  styleUrls: ['./afastamentos-edit.component.scss']
})
export class AfastamentosEditComponent implements OnInit{
  id!: number;
  servidores: Servidor[] = [];
  indisponibilidades: Indisponibilidade[] = [];
  form: FormGroup = new FormGroup({});
  afastamento!: Afastamento;

  constructor(
    private readonly router: Router,
    private readonly servidoresService: ServidoresService,
    private readonly indisponibilidadessService: IndisponibilidadesService,
    private readonly afastamentosService: AfastamentosService,
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.servidoresService.listCampo().subscribe((resp) => {
      this.servidores = resp;
      this.servidores.sort((a: Servidor, b: Servidor) =>
        a.nome.localeCompare(b.nome)
      );
    });

    this.indisponibilidadessService.listCampo().subscribe((resp) => {
      this.indisponibilidades = resp;
      this.indisponibilidades.sort((a: Indisponibilidade, b: Indisponibilidade) =>
        a.nome.localeCompare(b.nome)
      );
    });

    this.form = this.fb.group({
      servidor: [null, [Validators.required]],
      indisponibilidade: [null, [Validators.required]],
      dataInicio: [null, [Validators.required]],
      duracao: [null, [ Validators.required, Validators.min(1)]],
      exercicio: [null, [Validators.required]],
    });

    console.log(this.id)

    this.afastamentosService.findById(this.id).subscribe(resp => {
      this.afastamento = resp
      this.form.patchValue(this.afastamento)
    })
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const afastamento: Afastamento = this.form.value;
      this.afastamentosService
        .update(this.id ,afastamento)
        .pipe(
          catchError((err) => {
            this.afastamentosService.showMessage(
              'Afastamento não pode ser atualizado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.afastamentosService.showMessage(
            'Afastamento atualizado com sucesso!'
          );
          this.router.navigate(['/afastamentos']);
        });
    } else {
      this.afastamentosService.showMessage(
        'Existem campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void{
    this.router.navigate(['/afastamentos'])
  }

  compareIndisponibilidade(o1: Indisponibilidade, o2: Indisponibilidade): boolean {
    return o1?.id === o2?.id;
  }

  compareServidor(o1: Servidor, o2: Servidor): boolean {
    return o1?.id === o2?.id;
  }

}
