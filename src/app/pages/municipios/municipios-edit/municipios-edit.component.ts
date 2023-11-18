import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/models/estado.model';
import { MunicipiosService } from '../municipios.service';
import { EstadosService } from '../../estados/estados.service';
import { Municipio } from 'src/app/models/municipio.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-municipios-edit',
  templateUrl: './municipios-edit.component.html',
  styleUrls: ['./municipios-edit.component.scss']
})
export class MunicipiosEditComponent {

  id!: number;
  estados: Estado[] = [];
  form: FormGroup = new FormGroup({});
  municipio!: Municipio;

  constructor(
    private readonly router: Router,
    private readonly municipiosService: MunicipiosService,
    private readonly estadosService: EstadosService,
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.estadosService.listCampo().subscribe((resp) => {
      this.estados = resp;
      this.estados.sort((a: Estado, b: Estado) =>
        a.sigla.localeCompare(b.sigla)
      );
    });

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      estado: [null, [Validators.required]],
      sigla: [null, [ Validators.maxLength(3), Validators.minLength(3)]],
      ddd: [null, [ Validators.maxLength(2), Validators.minLength(2)]],
      regiao: [null, [Validators.required, Validators.minLength(3)]],
    });

    this.municipiosService.findById(this.id).subscribe(resp => {
      this.municipio = resp
      this.form.patchValue(this.municipio)
    })
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const municipio: Municipio = this.form.value;
      this.municipiosService
        .update(this.id, municipio)
        .pipe(
          catchError((err) => {
            this.municipiosService.showMessage(
              'Município não pode ser atualizado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.municipiosService.showMessage(
            'Município atualizado com sucesso!'
          );
          this.router.navigate(['/municipios']);
        });
    } else {
      this.municipiosService.showMessage(
        'Existem campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/municipios']);
  }

  compareState(o1: Estado, o2: Estado): boolean {
    return o1?.id === o2?.id;
  }
}
