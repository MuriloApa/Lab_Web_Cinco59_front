import { EstadosService } from './../estados.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pais } from 'src/app/models/pais.model';
import { PaisService } from '../../pais/pais.service';
import { Estado } from 'src/app/models/estado.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-estados-create',
  templateUrl: './estados-create.component.html',
  styleUrls: ['./estados-create.component.scss']
})
export class EstadosCreateComponent implements OnInit{

  paises: Pais[] = [];

  form: FormGroup = new FormGroup({});


  constructor(private readonly router: Router,
    private readonly paisesService: PaisService,
    private readonly estadosService: EstadosService,
    private readonly fb: FormBuilder){}

  ngOnInit(): void {
    this.paisesService.listCampo().subscribe((resp) => {
      this.paises = resp;
      this.paises.sort((a: Pais, b: Pais) =>
        a.sigla.localeCompare(b.sigla)
      )
    })

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      pais: [null, [Validators.required]],
      sigla: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      regiao: [null, [Validators.required]],
    })
  }

  save(): void{
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const estado: Estado = this.form.value;
      this.estadosService
        .create(estado)
        .pipe(
          catchError((err) => {
            this.estadosService.showMessage(
              'Estado não pode ser cadastrado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.estadosService.showMessage(
            'Estado cadastrado com sucesso!'
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

  cancel(): void{
    this.router.navigate(['/estados'])
  }
}
