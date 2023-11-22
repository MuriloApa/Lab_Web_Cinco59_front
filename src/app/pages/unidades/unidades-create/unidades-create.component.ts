import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UnidadesService } from '../unidades.service';
import { Unidade } from 'src/app/models/unidade.model';
import { regexValidator } from 'src/app/shared/validators/regex.validator';
import { Telefone } from 'src/app/models/telefone.model';
import { Email } from 'src/app/models/email.model';
import { catchError } from 'rxjs';
import { TipoTelefone } from 'src/app/shared/enums/tipoTelefone.enum';
import { TipoEmail } from 'src/app/shared/enums/tipoEmail.enum';
import { Municipio } from 'src/app/models/municipio.model';
import { MunicipiosService } from '../../municipios/municipios.service';
import { TipoEndereco } from 'src/app/shared/enums/tipoEndereco.enum';

@Component({
  selector: 'app-unidades-create',
  templateUrl: './unidades-create.component.html',
  styleUrls: ['./unidades-create.component.scss']
})
export class UnidadesCreateComponent implements OnInit{

  unidades!: Unidade[];
  municipios!: Municipio[];


  form: FormGroup = new FormGroup({});

  constructor(
    private readonly router: Router,
    private readonly unidadesService: UnidadesService,
    private readonly municipiosService: MunicipiosService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.unidadesService.listCampo().subscribe((resp) => {
      this.unidades = resp;
      this.unidades.sort((a: Unidade, b: Unidade) =>
        a.sigla.localeCompare(b.sigla)
      )
    })

    this.municipiosService.listCampo().subscribe((resp) => {
      this.municipios = resp;
      this.municipios.sort((a: Municipio, b: Municipio) =>
        a.nome.localeCompare(b.nome)
      )
    })

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      sigla: [null, [Validators.required, Validators.minLength(2), regexValidator(/^[A-Z]+$/)]],
      formal: [null, [Validators.required]],
      unidadeSuperiorImediata: [null],
      ordenacaoForcada: [null, [ Validators.required]],
      endereco: this.fb.group({
        CEP: ['', [Validators.required, regexValidator(/^\d{8}/)]],
        logradouro: ['', [Validators.required, Validators.minLength(3)]],
        numero: [''],
        bairro: ['', [Validators.required, Validators.minLength(3)]],
        observacao: [''],
        municipio: ['', [Validators.required]],
        tipo: [TipoEndereco.UNIDADE],
      }),
      telefones: this.fb.array([this.addTelefoneGroup()]),
      email: this.fb.group({
        endereco: [null, [Validators.required]],
        tipo: [TipoEmail.UNIDADE],
      }),
    });
  }

  get telefonesArray(): FormArray {
    return this.form.get('telefones') as FormArray;
  }

  addTelefoneGroup(): FormGroup{
    return this.fb.group({
      numero: ['', [Validators.required, regexValidator(/^\d{8,11}$/)]],
      tipo: [TipoTelefone.UNIDADE]
    });
  }

  addTelefoneInput(): void {
    this.telefonesArray.push(this.addTelefoneGroup());
    console.log(this.form.value)
  }

  removeTelefoneInput(index: number): void {
    this.telefonesArray.removeAt(index);
  }

  removeNulosTelefones(): Telefone[] {
    const naoNulos: Telefone[] = [];

    this.telefonesArray.controls.forEach((control) => {
      const value = control.value;
      if (value !== null && value !== undefined && value !== '') {
        naoNulos.push(value);
      }
    });

    return naoNulos;
  }


  save(): void {
    let unidade: Unidade = this.form.value;
    this.form.markAllAsTouched();
    if (this.form.valid) {
      let unidade: Unidade = this.form.value;
      unidade.telefones = this.removeNulosTelefones();
      unidade.formal = unidade.formal === 'true';
      console.log(unidade)
      this.unidadesService
        .create(unidade)
        .pipe(
          catchError((err) => {
            this.unidadesService.showMessage(
              'Servidor não pode ser cadastrado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.unidadesService.showMessage(
            'Unidade cadastrada com sucesso!'
          );
          this.router.navigate(['/unidades']);
        });
    } else {
      this.unidadesService.showMessage(
        'Existem campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void{
    this.router.navigate(['/unidades'])
  }
}
