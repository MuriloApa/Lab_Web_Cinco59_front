import { AfastamentosService } from './../afastamentos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Indisponibilidade } from 'src/app/models/indisponibilidade.model';
import { Servidor } from 'src/app/models/servidor.model';
import { ServidoresService } from '../../servidores/servidores.service';
import { IndisponibilidadesService } from '../../indisponibilidades/indisponibilidades.service';
import { Afastamento } from 'src/app/models/afastamento.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-afastamentos-create',
  templateUrl: './afastamentos-create.component.html',
  styleUrls: ['./afastamentos-create.component.scss']
})
export class AfastamentosCreateComponent implements OnInit{

  servidores: Servidor[] = [];
  indisponibilidades: Indisponibilidade[] = [];

  form: FormGroup = new FormGroup({});

  constructor(
    private readonly router: Router,
    private readonly servidoresService: ServidoresService,
    private readonly indisponibilidadessService: IndisponibilidadesService,
    private readonly afastamentosService: AfastamentosService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
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
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const afastamento: Afastamento = this.form.value;
      this.afastamentosService
        .create(afastamento)
        .pipe(
          catchError((err) => {
            this.afastamentosService.showMessage(
              'Afastamento não pode ser cadastrado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.afastamentosService.showMessage(
            'Afastamento cadastrado com sucesso!'
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
}
