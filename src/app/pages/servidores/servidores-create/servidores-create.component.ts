import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { Genero } from 'src/app/models/genero.model';
import { ServidoresService } from '../servidores.service';
import { GenerosService } from '../../generos/generos.service';
import { Servidor } from 'src/app/models/servidor.model';
import { TipoSanguineo } from 'src/app/shared/enums/tipoSanguineo.enum';
import { Cargo } from 'src/app/models/cargo.model';
import { CargosService } from '../../cargos/cargos.service';
import { Unidade } from 'src/app/models/unidade.model';
import { UnidadesService } from '../../unidades/unidades.service';
import { TipoClasse } from 'src/app/shared/enums/tipoClasse.enum';
import { Terceirizado } from 'src/app/models/terceirizado.model';
import { TerceirizadosService } from '../../terceirizados/terceirizados.service';

@Component({
  selector: 'app-servidores-create',
  templateUrl: './servidores-create.component.html',
  styleUrls: ['./servidores-create.component.scss']
})
export class ServidoresCreateComponent implements OnInit{

  generos: Genero[] = [];
  tipoSanguineos: string[] = [TipoSanguineo.A_NEGATIVO, TipoSanguineo.A_POSITIVO, TipoSanguineo.B_NEGATIVO,
      TipoSanguineo.B_POSITIVO, TipoSanguineo.AB_NEGATIVO, TipoSanguineo.AB_POSITIVO, TipoSanguineo.O_NEGATIVO, TipoSanguineo.O_POSITIVO];

  cargos!: Cargo[];
  unidades!: Unidade[];
  classes: string[] = [TipoClasse.CLASSE_ESPECIAL, TipoClasse.PRIMEIRA_CLASSE, TipoClasse.SEGUNDA_CLASSE, TipoClasse.TERCEIRA_CLASSE]
  servidores!: Servidor[];
  terceirizados!: Terceirizado[];

  form: FormGroup = new FormGroup({});

  constructor(
    private readonly router: Router,
    private readonly service: ServidoresService,
    private readonly generosService: GenerosService,
    private readonly cargosService: CargosService,
    private readonly unidadesService: UnidadesService,
    private readonly servidoresService: ServidoresService,
    private readonly terceirizadoService: TerceirizadosService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.generosService.listCampo().subscribe((resp) => {
      this.generos = resp;
      this.generos.sort((a: Genero, b: Genero) =>
        a.nome.localeCompare(b.nome)
      );
    });

    this.cargosService.listCampo().subscribe((resp) => {
      this.cargos = resp;
      this.cargos.sort((a: Cargo, b: Cargo) =>
        a.sigla.localeCompare(b.sigla)
      )
    })

    this.unidadesService.listCampo().subscribe((resp) => {
      this.unidades = resp;
      this.unidades.sort((a: Unidade, b: Unidade) =>
        a.sigla.localeCompare(b.sigla)
      )
    })

    this.servidoresService.listCampo().subscribe((resp) => {
      this.servidores = resp;
      this.servidores.sort((a: Servidor, b: Servidor) =>
        a.nome.localeCompare(b.nome)
      )
    })

    this.terceirizadoService.listCampo().subscribe((resp) => {
      this.terceirizados = resp;
      this.terceirizados.sort((a: Terceirizado, b: Terceirizado) =>
        a.nome.localeCompare(b.nome)
      )
    })

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      nomeDeGuerra: [null, [Validators.required, Validators.minLength(3)]],
      cpf: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      dataNascimento: [null, [Validators.required]],
      sexo: [null, [ Validators.required]],
      genero: [null, [Validators.required]],
      tipoSanguineo: [null],
      cargo: [null, [Validators.required]],
      unidade: [null, [Validators.required]],
      siape: [null, [Validators.required]],
      matricula: [null, [Validators.required]],
      dataPosse: [null, [Validators.required]],
      classe: [null, [Validators.required]],
      ativo: ['true'],
      chefe: [null],
      servidoresSubordinados: this.fb.array([]),
      terceirizadosSubordinados: this.fb.array([])
    });
  }

  get servidoresSubordinados(): FormArray {
    return this.form.get('servidoresSubordinados') as FormArray;
  }

  addServidorInput(): void {
    this.servidoresSubordinados.push(this.fb.control(''));
  }

  removeServidorInput(index: number): void {
    this.servidoresSubordinados.removeAt(index);
  }

  get terceirizadosSubordinados(): FormArray {
    return this.form.get('servidoresSubordinados') as FormArray;
  }

  addTerceirizadoInput(): void {
    this.terceirizadosSubordinados.push(this.fb.control(''));
  }

  removeTerceirizadoInput(index: number): void {
    this.terceirizadosSubordinados.removeAt(index);
  }

  removeNulos(): Servidor[] | Terceirizado[] {
    const naoNulos: Servidor[] | Terceirizado[] = [];

    this.servidoresSubordinados.controls.forEach((control) => {
      const value = control.value;
      if (value !== null && value !== undefined && value !== '') {
        naoNulos.push(value);
      }
    });

    return naoNulos;
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      let servidor: Servidor = this.form.value;
      this.service
        .create(servidor)
        .pipe(
          catchError((err) => {
            this.service.showMessage(
              'Servidor não pode ser cadastrado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.service.showMessage(
            'Servidor cadastrado com sucesso!'
          );
          this.router.navigate(['/servidores']);
        });
    } else {
      this.service.showMessage(
        'Existem campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void{
    this.router.navigate(['/servidores'])
  }
}
