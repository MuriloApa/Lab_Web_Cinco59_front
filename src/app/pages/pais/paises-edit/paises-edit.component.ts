import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pais } from 'src/app/models/pais.model';
import { PaisService } from '../pais.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-paises-edit',
  templateUrl: './paises-edit.component.html',
  styleUrls: ['./paises-edit.component.scss']
})
export class PaisesEditComponent {

  id!: number;
  form: FormGroup = new FormGroup({});
  pais!: Pais;

  constructor(
    private readonly router: Router,
    private readonly paisesService: PaisService,
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      sigla: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      ddi: [null, [Validators.required, Validators.minLength(2)]]
    });

    this.paisesService.findById(this.id).subscribe(resp => {
      this.pais = resp
      this.form.patchValue(this.pais)
    })
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const pais: Pais = this.form.value;
      this.paisesService
        .update(this.id, pais)
        .pipe(
          catchError((err) => {
            this.paisesService.showMessage(
              'País não pode ser atualizado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.paisesService.showMessage(
            'País atualizado com sucesso!'
          );
          this.router.navigate(['/paises']);
        });
    } else {
      this.paisesService.showMessage(
        'Existem campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/paises']);
  }

}
