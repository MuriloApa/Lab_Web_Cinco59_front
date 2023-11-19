import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Indisponibilidade } from 'src/app/models/indisponibilidade.model';
import { IndisponibilidadesService } from '../indisponibilidades.service';

@Component({
  selector: 'app-indisponibilidades-edit',
  templateUrl: './indisponibilidades-edit.component.html',
  styleUrls: ['./indisponibilidades-edit.component.scss']
})
export class IndisponibilidadesEditComponent implements OnInit{

  id!: number;
  form: FormGroup = new FormGroup({});
  indisponibilidade!: Indisponibilidade;

  constructor(
    private readonly router: Router,
    private readonly service: IndisponibilidadesService,
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
    });

    this.service.findById(this.id).subscribe(resp => {
      this.indisponibilidade = resp
      this.form.patchValue(this.indisponibilidade)
    })
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const indisponibilidade: Indisponibilidade = this.form.value;
      this.service
        .update(this.id, indisponibilidade)
        .pipe(
          catchError((err) => {
            this.service.showMessage(
              'Indisponibilidade não pode ser atualizada!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.service.showMessage(
            'Indisponibilidade atualizada com sucesso!'
          );
          this.router.navigate(['/indisponibilidades']);
        });
    } else {
      this.service.showMessage(
        'Existem campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/indisponibilidade']);
  }
}
